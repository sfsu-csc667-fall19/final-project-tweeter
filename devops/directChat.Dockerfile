FROM node:10-alpine

WORKDIR /main
COPY ./server/directChat.js /main
COPY ./package.json /main
COPY ./package-lock.json /main

RUN npm install

EXPOSE 3004

CMD ["node", "directChat.js"]