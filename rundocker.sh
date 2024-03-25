#!/bin/bash

# Build the Docker image
docker build -t myimage .

# Run the Docker container
docker run -d --name -p 80:3000 mycontainer myimage
