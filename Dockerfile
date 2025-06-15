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
FROM node:latest

# WORKDIR /usr/share/nginx/html

# RUN rm -rf ./*

# COPY --from=builder /me-v3/build .

# ENV PORT=9999

# EXPOSE 9999

# CMD [ "nginx", "-g", "daemon off;" ]
WORKDIR /me-v3/
COPY --from=builder /me-v3/.next ./.next
COPY --from=builder /me-v3/node_modules ./node_modules
COPY --from=builder /me-v3/package.json ./package.json

ENV PORT=9999

EXPOSE 9999

CMD ["npm", "start"]
