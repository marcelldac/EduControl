FROM node:20.11.0-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install


COPY . .

RUN npx prisma generate
RUN npx prisma migrate dev

EXPOSE 3333


CMD ["npm", "run", "dev"]