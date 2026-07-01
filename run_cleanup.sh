#!/bin/bash
set -e

echo "Enviando script de limpeza para o servidor..."
scp -i crypto.pem -o StrictHostKeyChecking=no clean_cluster.sh debian@[2a01:4f8:10b:10df:f816:3eff:fe54:567a]:~
ssh -i crypto.pem -o StrictHostKeyChecking=no debian@2a01:4f8:10b:10df:f816:3eff:fe54:567a "bash ~/clean_cluster.sh"
