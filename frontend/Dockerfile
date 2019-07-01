FROM node:8.12-alpine

RUN npm install -g @vue/cli
RUN npm install -g @vue/cli-service-global

RUN PATH=$PATH:/usr/local/bin

WORKDIR /app
COPY package*.json ./

RUN npm i
COPY . .

EXPOSE 8080

# CMD ["sleep", "300000"]
CMD ["npm", "run", "serve", "--port=8080"]


