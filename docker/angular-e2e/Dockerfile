FROM trion/ng-cli-e2e

WORKDIR /app

COPY ./package.json package.json

RUN npm install

COPY . .

COPY ./docker/angular-e2e/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

LABEL maintainer="Evgenii Koniakhin <eugene2238@gmail.com>" \
      version="1.0"

ENTRYPOINT ["/entrypoint.sh"]
