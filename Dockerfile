FROM node:alpine

WORKDIR /home/node
COPY . /home/node

RUN npm install

CMD npm start
