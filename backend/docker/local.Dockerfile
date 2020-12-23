FROM node:14.15.3-alpine3.10

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN yarn install

# Bundle app source
COPY . .

EXPOSE 4008
CMD [ "yarn", "run" , "dev"]