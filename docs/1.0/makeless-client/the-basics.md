# The Basics

At makeless, everything is based on simple `.makeless.yml` config files.
The idea or concept of makeless is to separate all of your docker services into different git repositories or directories.
This provides a better services organisation, keeps your projects clean and clear and speed up your deployments.

[[toc]]

## The `.makeless.yml` file

The `.makeless.yml` files are the heart of your deployments and lives in the root of your git service repository or service directory.
There a two types of makeless configurations and each of them consists on just a few parameters.

### The `service` configuration

The service configuration handles your docker service deployments and organize your service containers. 

```yaml
host: '128.232.434.232:8080'
name: 'project-service'

files:
  - index.html
  ...

service:
  ...
``` 

### The `shared` configuration 

The shared configuration can share your docker ressources like `networks` with all your services and containers.

```yaml
host: '128.232.434.232:8080'
name: 'project-shared'

shared:
  ...
```

The shared configuration ignores any service or services configuration.

### Parameters

| Name          | Description                                                                      |
| ------------- |:--------------------------------------------------------------------------------:|
| host          | The host and port of your [makeless server](/docs/1.0/makeless-server/introduction.md) |
| name          | The name of your service or shared ressource                                     |
| files         | A list of all your files and directories you want to deploy                      |
| service       | Your docker service configuration                                                |
| shared        | Your docker shared configurations like `networks`                                |

## Deployment

You can deploy your application, service or shared ressources from your local machine or per any CI like `travis` or `circleci`.
Just run this command at the root of your git service repository or service directory.

:::warning Token

Please replace the token with your `makeless server` token.
:::

### MacOS

```bash
curl -sL -o makeless https://github.com/makeless/makeless/releases/download/v0.4.0/makeless-darwin && \
    chmod +x makeless && \
    TOKEN="RANDOM-TOKEN-HERE" ./makeless
```

### Linux

```bash
curl -sL -o makeless https://github.com/makeless/makeless/releases/download/v0.4.0/makeless-linux && \
    chmod +x makeless && \
    TOKEN="RANDOM-TOKEN-HERE" ./makeless
```
