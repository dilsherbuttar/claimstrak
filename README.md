# claimstrak

## Description
 This app allows the user to track the insurance claims submitted.
 The app will have the following input fields
 1. Claim submitted (date)
 2. Name of the service provider
 3. Claim amount

## Folder Structure

  The front-end will be made using create react app. 
  ```bash
  ├── src 
  |    ├── public          
  │    ├── src             # React code 
  ├── test 
  |  ├── benchmarks          # Load and stress tests
  │  ├── integration         # Automated tests 
  ├── config                 # keys for database
  ├── tools                  # Tools and utilities
  ├── models                 # Database schema
  ├── routes                 # Server and API files
  ├── LICENSE
  ├── docker-compose.yml
  ├── Dockerfile
  └── README.md
  ```
## Docker details
For the Docker container there would be a new folder created in /src which will have the image for the front end exposed at 3001. There are seperate containers for database and the front-end.
  ```bash
  FROM node:8.9-alpine
  RUN mkdir -p /src/app
	WORKDIR /src/app
	COPY . /src/app
	RUN npm install
	EXPOSE 3001
	CMD ["npm", "start"]
  ```



