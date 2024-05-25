FROM node:16.14-alpine

WORKDIR /app

COPY . ./

RUN npm install && npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

CMD [ "npm", "start" ]
