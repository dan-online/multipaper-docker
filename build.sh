cp -r scripts/ client/
cp -r scripts/ master/

cd master
docker build . -t multipaper-docker:dev

cd ..

cd client
docker build . -t multipaper-docker-client:dev