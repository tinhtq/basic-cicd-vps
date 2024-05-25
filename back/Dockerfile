FROM node:17.8-alpine

WORKDIR /app

COPY . ./

RUN yarn install && yarn build

EXPOSE 4000

CMD [ "yarn", "run", "start" ]
