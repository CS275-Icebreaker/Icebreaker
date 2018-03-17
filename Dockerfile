FROM node:alpine

RUN npm install

WORKDIR /home/node

CMD npm start
