FROM node:latest

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run tsbuild

EXPOSE 9000

CMD ["npm","start"]

