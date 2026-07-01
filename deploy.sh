#!/bin/bash
set -e

# Package locally
export COPYFILE_DISABLE=1
tar -czf /tmp/crypto-pulse.tar.gz --exclude=node_modules --exclude=.git --exclude=.next --exclude=dist --exclude=os_venv --exclude="._*" --exclude=".DS_Store" .

# Upload package, key and remote script
scp -i crypto.pem -o StrictHostKeyChecking=no /tmp/crypto-pulse.tar.gz debian@[2a01:4f8:10b:10df:f816:3eff:fe54:567a]:~
scp -i crypto.pem -o StrictHostKeyChecking=no crypto.pem debian@[2a01:4f8:10b:10df:f816:3eff:fe54:567a]:~/.ssh/id_rsa
scp -i crypto.pem -o StrictHostKeyChecking=no remote_build.sh debian@[2a01:4f8:10b:10df:f816:3eff:fe54:567a]:~

# Execute remote script
ssh -i crypto.pem -o StrictHostKeyChecking=no debian@2a01:4f8:10b:10df:f816:3eff:fe54:567a "bash ~/remote_build.sh"
