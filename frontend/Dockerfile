FROM node:alpine

RUN npm i -g yarn

RUN mkdir /var/app

WORKDIR /var/app

COPY package.json .

RUN yarn

COPY ./src ./src

CMD yarn start

EXPOSE 80