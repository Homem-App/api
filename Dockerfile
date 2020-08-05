FROM node:14-alpine

WORKDIR /src/homen_api

COPY package.json package-lock.json /src/homen_api/

RUN npm ci --silent

COPY . /src/homen_api

CMD ["npm", "run", "start"]