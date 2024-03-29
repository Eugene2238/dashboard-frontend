FROM node:8.16-alpine

RUN mkdir /app
WORKDIR /app

RUN \
  echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories \
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories \
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories \
  && apk --no-cache  update \
  && apk --no-cache  upgrade \
  && apk add --no-cache --virtual .build-deps \
    gifsicle pngquant optipng libjpeg-turbo-utils \
    yarn python g++ make \
    udev ttf-opensans chromium \
  && rm -rf /var/cache/apk/* /tmp/*

ENV CHROME_BIN /usr/bin/chromium-browser

ENV LIGHTHOUSE_CHROMIUM_PATH /usr/bin/chromium-browser

COPY ./package.json package.json

RUN npm install

COPY . .

COPY ./docker/chromium/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

LABEL maintainer="Evgenii Koniakhin <eugene2238@gmail.com>" \
      version="1.0"

ENTRYPOINT ["/entrypoint.sh"]
