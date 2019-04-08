#! /bin/bash
yarn build:server
heroku container:push --app=damp-spire-87033 web
heroku container:release --app=damp-spire-87033 web
# docker build -t bladexrogue/abb:latest .
# docker push bladexrogue/abb:latest
# ssh root@157.230.114.87 "docker pull bladexrogue/abb:latest && docker tag bladexrogue/abb:latest dokku/abb:latest && dokku tags:deploy abb latest"