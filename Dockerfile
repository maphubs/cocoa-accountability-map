FROM node:12-alpine as builder
ENV NODE_ENV=production
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn --production --pure-lockfile
RUN yarn global add modclean && yarn run modclean

# Bundle app source
FROM node:12-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app .
COPY . .
RUN yarn build
EXPOSE 4012
CMD ["yarn", "start"]