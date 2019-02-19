require('dotenv').config()
const http = require("http");
const CronJob = require("cron").CronJob;

const job = new CronJob("0 */15 8-21 * * *", function() {
  http.get(process.env.SERVER);
  console.log(`ping ${process.env.SERVER}`);
});

job.start();
console.log("job is running");

