FROM node:14-stretch AS builder
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
CMD ["node", "dist/server.js"]