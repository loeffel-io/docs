# Introduction

Makeless is an easy to use service and repository driven deployment framework based on [Docker Compose](https://docs.docker.com/compose) - Brings your services up in minutes!

[[toc]]

## Benefits of Makeless

There are several ways to deal with docker deployments and topics that emerge:

- Transfer
- Costs
- Authentication & Security
- Directory/File Organization
- Container Organization
- Sometimes: Reverts

Makeless takes care about all this topics without any trouble. We will dive into each of them:

### Well-known deployment solutions and their disadvantages

There are several ways to deploy your git repositories to one or multiple hosts - All of them are not that easy for beginners.  

#### Using a Registry

Some build their containers, push them to a registry and rebuild them via docker api, ssh or tools like [watchtower](https://github.com/containrrr/watchtower).
This is a clean and well-known way.

The disadvantages:

- In most of these cases, people place their single `docker-compose.yml` file - with tons of service configurations - on the host and everytime they need to change something,
they have to ssh into their machine, update their `docker-compose.yml` file and have to restart these containers.
- Using a Registry is cost intensive. Building software the microservice way could increase your number of private images really fast.
For example, [Uber](https://uber.com) is using more then [1000](https://www.youtube.com/watch?v=kb-m2fasdDY) Microservices.
- There is no fix directory structure for your volumes and files - One day there are several directory structures on your different host machines when your team grows up.

#### Using SSH

Some zip all necessary files, transfer them via [rsync](https://rsync.samba.org/) or [scp](https://linux.die.net/man/1/scp), unzip these files on the host machine and run some remote docker commands or using the docker api to build their containers.

The disadvantages:

- Hard-to-read bash scripts. Sometimes there is also one bash script for each of your services - if you need to change something, you have to change it for every of your git repositories.
- Hard-to-manage authentication and security. In most cases, people use generated ssh private and public keys to authenticate the client. If you have to manage multiple git repositories you have to generate tons of keys, add them to your machines and store them somewhere.
- Hard-to-manage `docker-compose.yml` file. Starting your containers is [only possible](https://github.com/docker/compose/issues/4047) when all of your services are transferred to the host machine.
- There is no fix directory structure for your volumes and files - One day there are several directory structures on your different host machines when your team grows up.
- Using this way is cost intensive cause someone have to maintain the process.

### The Makeless way

With makeless all your services (like httpd, nginx, mysql, redis, ..) are managed isolated in their own `.makeless.yml` file.
Makeless takes your `.makeless.yml` file, creates an isolated `docker-compose.yml` file with the correct paths,
zips all of your necessary files and transfers them to one or multiple hosts by a [JWT Token](https://jwt.io) and SSL protected way.
On the host, makeless symlinks your new build and builds up your container(s) via the `docker-compose` binary.

Sounds easy, right? This brings up a tons of benefits:

- Super easy and fast setup - Deploy your services within minutes!
- Maintaining your services isolated via the [`.makeless.yml`](/docs/1.0/makeless-client/the-basics.md#the-makeless-yml-file) file is very easy and will save you a lot of costs and nerves - You do not have one single `docker-compose.yml` file with tons of lines!
- Your transfers are safe and secured without storing tons of ssh keys or adding your docker login to your environment variables.
- An uniformly, clean and solid [directory structure](/docs/1.0/makeless-server/directory-structure.md) on every of your host machines.
- Reverting your deployment to an older build can be done easily by just setting the symlink to an older build and rebuild your container.
- No hard-to-read bash scripts.
- Availability to deploy and use [shared ressources](/docs/1.0/makeless-client/the-basics.md#the-makeless-yml-file) like networks, volumes or ssl certs without any data volume.

Still got questions? - You can find a few examples at GitHub: [Examples](https://github.com/makeless/example)

## Components

Makeless is build on two components:

- Makeless Server receives your deployments and manages all your docker containers painlessly.
- Makeless Client pushes your `.makeless.yml` configs and files to the Makeless Server

## Requirements 

Makeless supports linux and macos machines
