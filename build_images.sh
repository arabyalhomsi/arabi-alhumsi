#!/bin/sh
#  This file builds the images and starts the containers

if [ "$1" = "frontend" ]
then
    cd frontend
    docker build --tag=arabi_frontend_image .
elif [ "$1" = "backend" ]
then
    cd backend
    docker build --tag=arabi_backend_image .
    cd ..
    docker-compose up -d
elif [ "$1" = "oauth2" ]
then
    cd oauth2
    docker build --tag=arabi_oauth2_image .
    cd ..
    docker-compose up -d
else
    # echo "specify which image as a first argument (frontend, backend)"
    cd frontend
    docker build --tag=arabi_frontend_image .
    cd ..
    cd backend
    docker build --tag=arabi_backend_image .
    cd ..
    docker-compose up -d
fi