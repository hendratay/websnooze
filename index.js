require('dotenv').config()
const https = require("https");
const CronJob = require("cron").CronJob;

const job = new CronJob("0 */15 8-21 * * *", function() {
  https.get(process.env.SERVER);
  console.log(`ping ${process.env.SERVER}`);
});

job.start();
console.log("job is running");

