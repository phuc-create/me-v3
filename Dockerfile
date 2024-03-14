ARG IMAGE_NAME="me-v3"

FROM node:latest AS builder

WORKDIR /me-v3/

COPY package.json /me-v3/
COPY public/ /me-v3/public
COPY src/ /me-v3/src

RUN npm install

COPY . .

RUN npm run build


# DEFINE NEW IMAGES FOR SERVING THE APPLICATION
FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /me-v3/build .

ENV PORT=9999

EXPOSE 9999

CMD [ "nginx", "-g", "daemon off;" ]
