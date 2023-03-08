./copy.sh

cd master
docker build . -t danonline/multipaper-docker:latest

cd ..

cd client
docker build . -t danonline/multipaper-docker-clients:latest