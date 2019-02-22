require('dotenv').config()
const http = require("http");
const https = require("https");
const CronJob = require("cron").CronJob;

const server = http.createServer((req, res) => {
  res.end();
}).listen(process.env.PORT);

const job = new CronJob("0 */15 1-14 * * *", function() {
  https.get(process.env.LOCAL); // keep myself alive
  https.get(process.env.SERVER); // keep another server alive
  console.log(`ping ${process.env.LOCAL}`);
  console.log(`ping ${process.env.SERVER}`);
});

job.start();
console.log("job is running");

