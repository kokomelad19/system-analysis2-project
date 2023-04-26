const { Kafka, logLevel } = require("kafkajs");

const kafka = new Kafka({
  clientId: "instructor-student",
  brokers: [process.env.KAFKA_BROKER],
  logLevel: logLevel.DEBUG,
});

const producer = kafka.producer();

const connectProducer = async () => {
  await producer.connect();
  console.log("Producer Connected Successfully");
};

const disconnectProducer = async () => {
  await producer.disconnect();
  console.log("Producer disconnected Successfully");
};

module.exports = {
  producer,
  connectProducer,
  disconnectProducer,
};
