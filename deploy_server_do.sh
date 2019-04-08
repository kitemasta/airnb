#! /bin/bash
yarn build:server
docker build -t bladexrogue/abb:latest .
docker push bladexrogue/abb:latest
ssh root@157.230.114.87 "docker pull bladexrogue/abb:latest && docker tag bladexrogue/abb:latest dokku/abb:latest && dokku tags:deploy abb latest"