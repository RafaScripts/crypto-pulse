#!/bin/bash
set -e

echo "Starting remote deployment process..."

echo "Extracting code..."
rm -rf ~/crypto-pulse
mkdir -p ~/crypto-pulse
tar -xzf ~/crypto-pulse.tar.gz -C ~/crypto-pulse/
cd ~/crypto-pulse

echo "Stopping Kubernetes pods to free up resources for the build..."
sudo k3s kubectl scale deployment --all --replicas=0 || true
sudo k3s kubectl scale statefulset --all --replicas=0 || true
echo "Waiting 10 seconds for pods to terminate..."
sleep 10

echo "Building images in parallel..."
for svc in api-gateway arbitrage-engine auth-service ingestion-service mcp-server notification-service persistence-service; do
  sudo docker build -t crypto-pulse-$svc:latest -f infra/docker/Dockerfile.microservice --build-arg SERVICE_NAME=$svc . &
done

sudo docker build -t crypto-pulse-web:latest -f infra/docker/Dockerfile.web . &

# Wait for all background builds to finish
wait

echo "Saving and importing images one by one..."
IMAGES="crypto-pulse-api-gateway:latest crypto-pulse-arbitrage-engine:latest crypto-pulse-auth-service:latest crypto-pulse-ingestion-service:latest crypto-pulse-mcp-server:latest crypto-pulse-notification-service:latest crypto-pulse-persistence-service:latest crypto-pulse-web:latest"

chmod 600 ~/.ssh/id_rsa || true

for img in $IMAGES; do
  echo "Importing $img to local k3s..."
  sudo docker save $img | sudo k3s ctr -n k8s.io images import -
  
  echo "Copying $img to workers..."
  ( sudo docker save $img | ssh -o StrictHostKeyChecking=no debian@172.16.0.201 "sudo k3s ctr -n k8s.io images import -" ) &
  ( sudo docker save $img | ssh -o StrictHostKeyChecking=no debian@172.16.0.140 "sudo k3s ctr -n k8s.io images import -" ) &
  wait
done

echo "Applying manifests..."
if [ -f .env ]; then
  echo "Injecting .env into Kubernetes ConfigMap..."
  sudo k3s kubectl create configmap crypto-pulse-env --from-env-file=.env --dry-run=client -o yaml | sudo k3s kubectl apply -f -
fi

sudo k3s kubectl apply -f infra/k8s/
sudo k3s kubectl rollout restart deployment/api-gateway deployment/auth-service deployment/ingestion-service deployment/notification-service deployment/persistence-service deployment/web-dashboard deployment/arbitrage-engine deployment/mcp-server || true

echo "Deployment complete!"
