FROM node:16

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY ./test/web/package.json /usr/src/app/
COPY ./test/web/yarn.lock /usr/src/app/
RUN yarn

# Copying source files
COPY ./test/web/ /usr/src/app/
COPY ./src/ /usr/src/app/lib/api/

# Building app
EXPOSE 3003

# Running the app
CMD "yarn" "dev"