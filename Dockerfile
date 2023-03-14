FROM node:18

WORKDIR /usr/app

copy package*.json .

RUN npm install

CMD ["npm", "run", "dev"]