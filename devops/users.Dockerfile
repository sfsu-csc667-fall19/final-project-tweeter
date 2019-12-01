FROM node:10-alpine

WORKDIR /main
COPY ./server/user.js /main
COPY ./package.json /main
COPY ./package-lock.json /main

RUN npm install

EXPOSE 3002

CMD ["node", "user.js"]