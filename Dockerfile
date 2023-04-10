# Image source
FROM node:19.7.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copying file into APP directory of docker
COPY ./package.json ./yarn.lock /app/

# Then install the YARN module
RUN yarn install

# Copy the current directory contents into the container at /app
COPY . /app/

# Expose port 3000 for the app
EXPOSE 3001

# Start the app using docker-compose
CMD ["yarn", "start"]
