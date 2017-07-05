# Docker base images

## Kue dashboard

Kue is a priority job queue backed by redis, built for node.js.

More information here https://github.com/Automattic/kue#user-interface

Easy Kue monitoring:

```yaml
redis:
  restart: always
  image: sergef/docker-library-redis:3.2.9
  command: --loglevel verbose

dashboard:
  restart: always
  image: sergef/docker-library-kue-dashboard:0.0.1
```

Point the stack proxy to the service:

```
server {
  listen 80;

  ...

  location /dashboard {
    proxy_pass http://dashboard;
    rewrite ^/dashboard/?(.*)$ /$1 break;
  }

  ...
}
```
