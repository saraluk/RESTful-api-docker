# Base Image setup
FROM node:7

# Set the working directory to /app
WORKDIR /app

# copy package.json to app dir
COPY package.json /app

# Install packages
RUN npm install

# copy the rest of the source code
COPY . /app

# Make port 80 available to the world outside this container
EXPOSE 8090

# command to start the app
CMD node index.js