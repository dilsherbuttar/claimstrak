FROM node:8.9-alpine
  RUN mkdir -p /src/app
	WORKDIR /src/app
	COPY . /src/app
	RUN npm install && npm run client-install
	EXPOSE 3000
	CMD ["npm", "run", "dev"]