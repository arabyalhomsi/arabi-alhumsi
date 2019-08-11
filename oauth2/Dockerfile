FROM node:10.16.2-jessie

RUN apt-get update && apt-get install git

RUN npm install -g db-migrate nodemon

RUN PATH=$PATH:/usr/local/bin

COPY package*.json ./
RUN npm i


WORKDIR /app

COPY . .

EXPOSE 8080

CMD ["nodemon", "./app/index.js" ]