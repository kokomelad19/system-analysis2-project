const { Kafka, logLevel } = require("kafkajs");

const kafka = new Kafka({
  clientId: "instructor-student",
  brokers: [process.env.KAFKA_BROKER],
  logLevel: logLevel.ERROR,
});

const consumer = kafka.consumer({ groupId: "courses" });

module.exports = consumer;
