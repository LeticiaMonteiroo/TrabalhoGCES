FROM node:18-alpine

WORKDIR /app

COPY server/package*.json ./server/

WORKDIR /app/server

RUN npm install

WORKDIR /app

COPY game ./game
COPY server ./server

EXPOSE 55555

WORKDIR /app/server

CMD ["npm", "run", "dev"]