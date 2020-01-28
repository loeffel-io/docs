# Installation

The Makeless Server installation is just a pull and will cost you less than 60 seconds.

[[toc]]

## Requirements

*   Linux or MacOS machine
*   Docker Engine 1.13.0+

## Pull and run

Just copy & paste this command to your machine to pull and run your `makeless server` container. 

:::warning Token

Please replace the token with a secure and random string.  
See also: [Configuration](/docs/1.0/makeless-server/configuration.md)
:::

```bash
docker run -d \
    --restart always \
    --name makeless \
    -p 8080:8080 \
    -v /var/run/docker.sock:/var/run/docker.sock:ro \
    -v ~/makeless:/home/makeless \
    -e MAX_SIZE=32 \
    -e TOKEN="RANDOM-TOKEN-HERE" \
    makeless/server
```

## SSL Support

SSL is supported by adding your certs directory as volume.
The contents of `/path/to/certs` should contain the certificate and privat key.
The certificate and key must be named `server.crt` and `server.key`.

```bash
docker run -d \
    --restart always \
    --name makeless \
    -p 8080:8080 \
    -v /var/run/docker.sock:/var/run/docker.sock:ro \
    -v ~/makeless:/home/makeless \
    -v ~/path/to/certs:/home/certs \
    -e MAX_SIZE=32 \
    -e TOKEN="RANDOM-TOKEN-HERE" \
    makeless/server
```

## Automatic updates

[Watchtower](https://github.com/containrrr/watchtower) provides and easy way to update your `makeless server` automatically. 
Just copy & paste this command to your machine to enable automatic updates:

```bash
docker run -d \
    --name watchtower \
    -v /var/run/docker.sock:/var/run/docker.sock:ro \
    v2tec/watchtower makeless
```

## Verify your installation

To verify your `makeless server` installation, you can just call the `ok` health api route of your server.

```bash
# without ssl
curl localhost:8080/ok # => {"data":"ok","error":null}

# ssl
curl https://{domain}:8080/ok # => {"data":"ok","error":null}
```
