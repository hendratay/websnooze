require('dotenv').config()
const https = require("https");
const CronJob = require("cron").CronJob;

const server = https.createServer((req, res) => {
  res.end();
}).listen(process.env.PORT);

const job = new CronJob("0 */15 8-21 * * *", function() {
  https.get(process.env.SERVER);
  console.log(`ping ${process.env.SERVER}`);
});

job.start();
console.log("job is running");

