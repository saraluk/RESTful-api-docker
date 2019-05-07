# Base Image setup
FROM node:7

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package.json /app

# Install packages
RUN npm install

# copy the rest of the source code
COPY . /app

# Make port 80 available to the world outside this container
EXPOSE 8088

# command to start the app
CMD node index.js