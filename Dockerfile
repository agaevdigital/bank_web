FROM node:11.2
WORKDIR /usr/src/app
COPY package.json ./
COPY . .
COPY entrypoint.sh /usr/local/bin/
RUN echo 'installing JS dependencies...'
RUN npm install
ENTRYPOINT ["bash", "entrypoint.sh"]
EXPOSE 3000
