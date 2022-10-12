FROM node:16-alpine3.15

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

CMD ["npm", "run", "start-dist"]

