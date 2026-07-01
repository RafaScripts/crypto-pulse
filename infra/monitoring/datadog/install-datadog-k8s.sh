#!/bin/bash
set -e

echo "=> Adicionando o repositório Helm do Datadog..."
helm repo add datadog https://helm.datadoghq.com
helm repo update

echo "=> Instalando o Datadog Agent no Kubernetes via Helm..."
# O DaemonSet garante que o Datadog Agent rode em TODOS os servidores do Kubernetes automaticamente.
helm upgrade --install datadog-agent datadog/datadog \
  --namespace datadog \
  --create-namespace \
  -f infra/monitoring/datadog/datadog-values.yaml \
  --kubeconfig kubeconfig-prod.yaml

echo "=> Instalação concluída! Você pode verificar o status dos agentes com:"
echo "kubectl --kubeconfig kubeconfig-prod.yaml get pods -n datadog"
