FROM node:14.15.5-alpine3.13

WORKDIR /home/api/
COPY ./ /home/api/

RUN yarn

EXPOSE 5555

CMD ["yarn","start"]