require('dotenv').config()
const http = require("http");
const CronJob = require("cron").CronJob;

const job = new CronJob("0 */15 6-12 * * *", function() {
  http.get(process.env.FRONT_END);
  http.get(process.env.BACK_END);
});
job.start();
