FROM ubuntu:18.10

RUN apt-get update

# Install build tools
RUN apt-get install -y \
  curl \
  build-essential \
  checkinstall \
  git-core

# Install Node
RUN apt-get install -y nodejs npm yarn
RUN node -v && npm -v && yarn --version
