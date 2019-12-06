const cron = require('node-cron');

cron.schedule('* * * * * *', () => {
  console.log('running this task second');
});

console.log('starting!')