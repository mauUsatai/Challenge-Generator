FROM node:13.12.0-alpine3.11

WORKDIR /app

# Copiando package.json de forma explicita para aproveitar o cache do docker
COPY package.json .
RUN  npm install

EXPOSE 3000
COPY  src ./src

CMD ["npm", "run", "start-prod"]
