FROM node:alpine

WORKDIR /home/node
COPY . /home/node

RUN npm install

CMD node src/main.js
