FROM node:16
WORKDIR /si3mshady_staging_directory
COPY ./package.json ./package.json
COPY ./public ./public
COPY ./src ./src
RUN yarn install 
EXPOSE 3000

CMD ["yarn","start"]
