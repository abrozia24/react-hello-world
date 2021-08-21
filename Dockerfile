# pull official base image
FROM node:14.17.5-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN yarn install --silent

# add app
COPY . ./

ENV REACT_APP_API_URL "http://localhost:3000"

EXPOSE 3000

# start app
CMD ["yarn", "start"]