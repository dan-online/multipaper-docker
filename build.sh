cp -r scripts/ client/
cp -r scripts/ master/

cd master
docker build . -t danonline/multipaper-docker:dev

cd ..

cd client
docker build . -t danonline/multipaper-docker-client:dev