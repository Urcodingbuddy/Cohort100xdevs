FROM node:20

WORKDIR /nextApp

COPY package* .

RUN npm install

COPY . .

CMD ["npm","run","dev"]
