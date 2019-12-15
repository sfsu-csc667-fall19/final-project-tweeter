module.exports = { // pm2 start process.config.js
    apps: [
      {
        name: 'Gateway-Service',
        script: './server/gateway.js',
        watch: true,
      },
      {
        name: 'Producer Kafka-Service',
        script: './server/kafkaTweet/producerKafka.js',
        watch: true,
      },
      {
        name: 'Consumer Kafka-Service',
        script: './server/kafkaTweet/consumerKafka.js',
        watch: true,
      },
      {
        name: 'Frontend-Service',
        script: './server/frontend.js',
        watch: true,
      },
      {
        name: 'Mongo-Service',
        script: './server/mongo-service.js',
        watch: true,
      },
      {
        name: 'Auth-Service',
        script: './server/auth.js',
        watch: true,
      }
    ],
  };