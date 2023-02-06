FROM node:lts-alpine3.17

EXPOSE 3000

WORKDIR /todo-ui

ENV PATH /todo-ui/node_modules/.bin:$PATH

COPY *.json ./

RUN npm install

COPY . .

CMD [ "astro", "dev" ]