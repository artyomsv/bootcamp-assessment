# Dockerfile
FROM node:8.1-slim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn

# Bundle app source
COPY . /usr/src/app

# Build and optimize react app
RUN yarn build

EXPOSE 9000

# defined in package.json
CMD node server
