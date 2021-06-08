FROM node:14-alpine

# set working directory
WORKDIR /home/client/
COPY . /home/client

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

EXPOSE 5555

# start app
CMD ["yarn","start"]