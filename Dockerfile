FROM node:alpine

RUN npm install

WORKDIR /home/node
COPY . /home/node

CMD npm start
