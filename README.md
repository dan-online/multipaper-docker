# Docker Multipaper

The easy way to launch a multipaper server and multipaper clients using docker

## Getting Started

### Prerequisities

In order to run this container you'll need docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

## Multipaper Server

First you need a multipaper "master" or server instance running, this is under the docker tag of `multipaper-docker` and requires ports `6000` and `25565` to be exposed. The inbuilt proxy of multipaper is used so 25565 is your main connection port.

```bash
$ docker run -p 6000:6000 25565:25565 --name multipaper-server multipaper-docker
```

### Environment Variables

* `VERSION` - Minecraft version supported by multipaper, default `1.18.2`

### Volumes

* `/data` - Files will be populated here

## Multipaper Clients

Second, you need multipaper "clients", these are your processing "nodes" as they will be what the users will be distributed between through the proxy. This is under the docker tag of `multipaper-docker-clients`. The below example exposes ports `25577` through `25677`, this is because each instance has an incremented port starting from `25577`.

```bash
$ docker run -p 25577:25677 --name multipaper-clients multipaper-docker-clients
```

### Environment Variables

* `VERSION` - Minecraft version supported by multipaper, default: `1.18.2`
* `MASTER` - The uri of the multipaper server, default: `localhost:6000`
* `OPS` - The operators, default: `""`
* `INSTANCES` - The number of clients to spawn, default: `1`

### Volumes

* `/data` - Files will be populated here

## Docker Compose

Check out the example configuration [here](test/docker-compose.yml)

## Built With

* [Multipaper](https://multipaper.io)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the 
[tags on this repository](https://github.com/dan-online/multipaper-docker/tags). 

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

<!-- CONTACT -->
## Contact

DanCodes - [@dan-online](https://dancodes.online) - dan@dancodes.online
