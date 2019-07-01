#!/bin/sh
#  This file builds the frontend image

cd frontend
docker build --tag=arabi_frontend_image .
