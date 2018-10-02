FROM ubuntu:18.10

RUN apt-get update && apt-get install -y \
  build-essential \
  checkinstall \
  git-core
