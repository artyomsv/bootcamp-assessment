#!/usr/bin/env bash

start_time=`date +%s`

export REACT_APP_API_TOKEN=$1

docker-compose build
docker-compose up -d

end_time=`date +%s`

echo "--------------------------------------------------------------------------------------"
echo "WEB  Deployed in `expr $end_time - $start_time` s."
echo "--------------------------------------------------------------------------------------"
