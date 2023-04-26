const { Kafka, logLevel } = require("kafkajs");

const kafka = new Kafka({
  clientId: "instructor-student",
  brokers: [process.env.KAFKA_BROKER],
  logLevel: logLevel.DEBUG,
});

const producer = kafka.producer();

module.exports = producer;
