const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../../.env` });

const app = require("./app");
const { connectProducer, disconnectProducer } = require("./kafka");

(async () => {
  await connectProducer();
})();

process.on("SIGINT", async () => {
  console.log("Shutting down...");
  await disconnectProducer();
  process.exit();
});

app.listen(process.env.PORT, () => {
  console.log("App is running on port", process.env.EXPOSED_PORT_INSTRUCTOR);
});
