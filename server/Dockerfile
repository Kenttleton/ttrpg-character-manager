FROM node:alpine as build
WORKDIR /build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine as app
WORKDIR /app
COPY --from=build /build .
RUN npm install
EXPOSE 80
CMD [ "node", "./bin/www" ]