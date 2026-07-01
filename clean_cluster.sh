#!/bin/bash
set -e

echo "================================================="
echo "🧹 Limpando Master Node (Docker e K3s containerd)..."
echo "================================================="
# Remove unused docker data (containers, images, build cache)
sudo docker system prune -a --volumes -f

# Remove dangling containerd images in k3s
sudo k3s crictl rmi --prune || true
# Alternatively if the above fails
sudo k3s ctr -n k8s.io images prune --all || true

WORKERS=("172.16.0.201" "172.16.0.140")

for worker in "${WORKERS[@]}"; do
  echo "================================================="
  echo "🧹 Limpando Worker Node $worker..."
  echo "================================================="
  ssh -o StrictHostKeyChecking=no debian@$worker "
    sudo docker system prune -a --volumes -f;
    sudo k3s crictl rmi --prune || true;
    sudo k3s ctr -n k8s.io images prune --all || true;
  "
done

echo "================================================="
echo "✨ Limpeza do cluster finalizada com sucesso!"
echo "================================================="
