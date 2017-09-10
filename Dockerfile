FROM node:alpine

EXPOSE 3000

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build

CMD ["npm", "start"]
