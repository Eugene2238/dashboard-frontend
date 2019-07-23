FROM node:8.16-alpine as builder

RUN mkdir /app

WORKDIR /app

RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*

COPY ./package.json package.json

RUN npm install

COPY . .

RUN npm run buildProd

FROM nginx:latest

COPY ./docker/node/conf/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/frontend /usr/share/nginx/html

LABEL maintainer="Evgenii Koniakhin <eugene2238@gmail.com>" \
      version="1.0"
