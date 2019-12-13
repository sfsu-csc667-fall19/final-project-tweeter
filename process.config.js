module.exports = { // pm2 start process.config.js
    apps: [
      {
        name: 'gateway',
        script: './server/gateway.js',
        watch: true,
      },
      {
        name: 'producerKafka',
        script: './server/kafkaTweet/producerKafka.js',
        watch: true,
      },
      {
        name: 'consumerKafka',
        script: './server/kafkaTweet/consumerKafka.js',
        watch: true,
      },
      {
        name: 'frontend',
        script: './server/frontend.js',
        watch: true,
      },
      {
        name: 'mongo-service',
        script: './server/mongo-service.js',
        watch: true,
      },
      {
        name: 'favorites',
        script: './server/favorites.js',
        watch: true,
      },
      
      {
        name: 'users',
        script: './server/auth.js',
        watch: true,
      }
    ],
  };