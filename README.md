# Docker+Nginx+Node.js
Just a simple reverse proxy for quickly spinning up prototypes.

## Getting Started

### Clone
```sh
git clone git@github.com:michaelhartmayer/docker-nginx-basic-reverse-proxy.git
```

### Build the images
```sh
docker-compose build
```

### Start the containers (`-d to detach`)
```sh
docker-compose up -d
```

### Visit
Front-End is served to:
```
http://localhost:8080/
```

Back-End is served to:
```
http://localhost:8080/api
```
