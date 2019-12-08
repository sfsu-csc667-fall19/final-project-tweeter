# Project description
# Tweeter
- Create a simple twitter like app 
- Login/user functionality
- Real time updates
- 1 main feature: message broadcasting
- app mock up: https://www.figma.com/file/43bIdBxlSfPcrTN2rUH0YW/csc667-tweeter-project?node-id=0%3A1


# Project team members
- Front end - Hale, Jesus, Jason
- Back end - Deep, Kevin, Bakulia, Sam
- Github master - Kevin

# Tech Requirements for project:
- Express back end with get/post endpoints
- Mongodb for storage
- Run on EC2
- Websocket for real time interactions FE
- React + Redux with routes for FE
- Microserver architecture back end with some services running multiple instances
- All FE requests must first hit gateway
- redis for caching values
- Backend components must be dockerized and running in Docker swarm mode
- Kafka for at least 1 conveyer
- Distributed messaging can be done with either kafka or redis


# Kafka 
Get latest images
- docker-compose pull 

# Start services
- docker swarm init
- docker stack deploy -c docker-compose.yml kafka-demo

# Run Kafka files
- node server/kafkaTweet/producerKafka.js
- node server/kafkaTweet/consumerKafka.js

# MongoDB
- go to the mongodb directory
- Manually start with bin/mongod --dbpath <path to db>





