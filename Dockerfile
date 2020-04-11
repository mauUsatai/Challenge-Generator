FROM node:8.11.3-alpine

WORKDIR /app

# Copiando package.json de forma explicita para aproveitar o cache do docker
COPY package.json .
RUN  npm install

EXPOSE 3000
COPY  src ./src

CMD ["npm", "run", "start-prod"]
