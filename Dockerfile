FROM node:20-alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm cache clean --force
RUN rm -rf node_modules

RUN npm install

COPY .. .

RUN npm run build

ENV PORT 8080

EXPOSE 8080

CMD ["npm", "start"]
