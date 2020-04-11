#!/bin/bash

docker system prune <<< 'y' && docker-compose build
