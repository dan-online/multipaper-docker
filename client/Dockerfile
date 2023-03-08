FROM node:18-alpine AS node

FROM openjdk:17-alpine

ENV VERSION 1.19.2
ENV MASTER localhost:6000
ENV OPS ""
ENV INSTANCES 1
ENV PROXY ""

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/share /usr/local/share
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

VOLUME [ "/data" ]

# RUN echo $MIRROR/alpine/edge/community >> /etc/apk/repositories
RUN apk update && apk upgrade && apk add bash curl jq yq screen && apk update openjdk17

RUN mkdir /app

# RUN wget https://github.com/mikefarah/yq/releases/download/v4.23.1/yq_linux_386 -O /usr/bin/yq && chmod +x /usr/bin/yq

ADD ./entrypoint /app/entrypoint
ADD ./scripts/ /app/scripts

RUN chmod +x /app/entrypoint

EXPOSE 25577-25677

CMD ["/app/entrypoint"]