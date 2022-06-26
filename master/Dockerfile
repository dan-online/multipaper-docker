FROM node:18-alpine AS node

FROM openjdk:17-alpine

ENV VERSION 1.18.2

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/share /usr/local/share
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

VOLUME [ "/data" ]

RUN apk update && apk upgrade && apk add bash jq curl && apk update openjdk17

RUN mkdir /app

ADD ./entrypoint /app/entrypoint
ADD ./scripts/ /app/scripts/

RUN chmod +x /app/entrypoint

EXPOSE 25565
EXPOSE 6000

CMD ["/app/entrypoint"]