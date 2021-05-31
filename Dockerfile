FROM node:12-alpine3.12
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve"]
