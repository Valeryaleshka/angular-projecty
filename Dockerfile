FROM node:22-alpine AS build

WORKDIR /app

RUN corepack enable && corepack prepare yarn@stable --activate

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn run build:prod

FROM nginx:latest AS ngi

COPY --from=build /app/dist/angular-projecty /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
