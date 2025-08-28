FROM node:22-alpine

COPY package*.json ./
RUN npm i
# Etapa de producción
COPY . .
CMD ["npm","run", "dev"]