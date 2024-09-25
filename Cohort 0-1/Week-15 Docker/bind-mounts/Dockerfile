FROM node:21

WORKDIR /nextApp

COPY package* .

RUN npm install

COPY . .

CMD ["npm","run","dev"]
