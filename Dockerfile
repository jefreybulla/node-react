FROM node:12 AS build
WORKDIR /app
COPY package* package-lock.json ./
RUN npm install
COPY public ./public
COPY src ./src
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html