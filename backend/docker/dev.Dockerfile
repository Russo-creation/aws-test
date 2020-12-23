FROM node:14.15.3-alpine3.10

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
#RUN npm install -g yarn
RUN yarn install --network-timeout 1000000

# Bundle app source
COPY . /usr/src/app

EXPOSE 4008
CMD ["yarn", "start"]