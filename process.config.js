module.exports = { // pm2 start process.config.js
    apps: [
      {
        name: 'gateway',
        script: './server/gateway.js',
        watch: true,
      },
      {
        name: 'messanger',
        script: './server/kafkaTweet/producerKafka.js',
        watch: true,
      },
      {
        name: 'messanger',
        script: './server/kafkaTweet/consumerKafka.js',
        watch: true,
      },
      {
        name: 'messanger',
        script: './server/mongo-service.js',
        watch: true,
      },
      {
        name: 'websocket',
        script: './server/websocket.js',
        watch: true,
      },
      {
        name: 'user',
        script: './server/auth.js',
        watch: true,
      }
    ],
  };