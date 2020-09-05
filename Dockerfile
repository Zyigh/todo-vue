FROM node:14-alpine AS builder

WORKDIR /todo
ADD / .
RUN npm install
RUN npm run build

FROM nginx:1.19.2-alpine

COPY --from=builder /todo/dist/ /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf
