FROM node:16
WORKDIR /streaming

COPY ./package.json ./package.json


COPY assets assets
COPY app.js app.js

RUN apt update -y
RUN apt install ffmpeg -y

RUN yarn install

EXPOSE 4000

HEALTHCHECK CMD curl --fail http://localhost:4000/health || exit 1


CMD ["node","app.js"]
