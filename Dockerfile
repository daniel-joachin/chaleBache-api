FROM node:14-alpine

RUN mkdir -p /home/api
# set working directory
WORKDIR /home/api/
COPY . /home/api/

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

EXPOSE 3030

# start app
CMD ["yarn","start"]