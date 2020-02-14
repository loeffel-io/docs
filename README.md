<p align="center">
    <img width="180" src="https://raw.githubusercontent.com/makeless/server/master/makeless-logo.png" alt="logo">
</p>

<p align="center">
    <iframe src="https://ghbtns.com/github-btn.html?user=makeless&repo=server&type=star&count=true" frameborder="0" scrolling="0" width="80px" height="20px"></iframe>
    <a href="https://travis-ci.com/makeless/server"><img src="https://travis-ci.com/makeless/server.svg?branch=master" alt="Build Status"></a>
    <a href="https://hub.docker.com/r/makeless/server"><img src="https://img.shields.io/docker/pulls/makeless/server" alt="Docker"></a>
</p> 

<h1 align="center">Makeless - Painless Docker Deployments</h1>  
   
<p align="center">
    Makeless is an easy to use deployment framework based on <a href="https://docs.docker.com/compose">Docker Compose</a><br>
    Brings your services up in minutes!
</p>

<p align="center" id="get-started-container">
    <a id="get-started" href="/docs/1.0/getting-started/introduction.html">Get Started &rarr;</a>
    <a id="video" href="https://www.youtube.com/watch?v=_MlREQ8C3mI" target="_blank">Play Video &rarr;</a>
</p>

<h2 style="margin-top:0; padding-bottom:10px; border-bottom: 2px solid rgba(0,0,0,0.05);">Deployments were never easier</h2>

Manage all your deployments and services in simple isolated `.makeless.yml` files:  

<div style="color:#A2A2A2; font-size:12px;">
    Simple <a href="https://hub.docker.com/_/httpd" target="_blank">httpd</a> example
</div>

```yaml
https: true               # enables/disables https
host: 'makeless.io:8080'  # your makeless server host address
name: 'makeless-docs'     # your service/directory name

files:                    # your files and directories you want to deploy
  - .vuepress/dist
  - .htaccess
  - Dockerfile

use:                      # your files and directories you want to use from other services
  makeless-shared:
    - ssl:ssl

service:                  # your docker-compose service configuration
  build:
    context: '%live_dir%'
    dockerfile: Dockerfile
  ports:
    - 80:80
    - 443:443
```
