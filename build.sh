cp -r scripts/ client/
cp -r scripts/ master/

cd master
docker build . -t danonline/multipaper-docker:latest

cd ..

cd client
docker build . -t danonline/multipaper-docker-client:latest