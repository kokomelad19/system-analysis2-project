const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../../.env` });

const app = require("./app");
const sequelize = require("./db");
const startKafkaConsumerService = require("./services/consumerService");

(async () => {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();

(async () => {
  try {
    await startKafkaConsumerService();
  } catch (err) {
    console.log("Kafka error ", err);
  }
})();

app.listen(process.env.PORT, () => {
  console.log("App is running on port", process.env.EXPOSED_PORT_STUDENT);
});
