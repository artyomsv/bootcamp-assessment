#!/bin/bash

DROPLET=$1

docker-machine env ${DROPLET}
eval $(docker-machine env ${DROPLET})

export REACT_APP_API_TOKEN=$2

docker-compose build
docker-compose up -d

eval $(docker-machine env -u)

echo @@@@@@@@@@@@@@@@@@@@@
echo @ process finished! @
echo @@@@@@@@@@@@@@@@@@@@@
