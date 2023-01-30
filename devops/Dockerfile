FROM node:16-alpine

RUN npm install -g serve

WORKDIR /app

COPY ./build/ ./

EXPOSE 3000

CMD serve -s 
