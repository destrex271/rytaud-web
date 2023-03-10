FROM node:18.14.0-alpine3.16
WORKDIR /app
COPY . .
RUN yarn
RUN yarn start
