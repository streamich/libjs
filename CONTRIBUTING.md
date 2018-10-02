# Contributing

Build docker image.

```shell
docker build -t libjs .
```

Run the container.

```shell
docker run -it --rm -v $(pwd):/app libjs
```
