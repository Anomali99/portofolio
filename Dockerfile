FROM node:20.18.2-slim

WORKDIR /base

COPY . /base/

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]