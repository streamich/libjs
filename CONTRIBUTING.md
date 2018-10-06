# Contributing

Build docker image.

```shell
docker build -t libjs .
```

Run the container.

```shell
docker run -it --rm -v $(pwd):/app --network host -p 8099:8099 libjs
```
