const consumer = require("../kafka");
const { createCourseService } = require("./coursesService");

const startKafkaConsumerService = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({
      topic: process.env.KAFKA_TOPIC,
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(
          `\n\nMessage Received ✅🔥 \nKey = ${message.key.toString()}\n\nmessage = ${message.value.toString()}\n\ntopic= ${topic}\n\n`
        );

        switch (message.key.toString().trim()) {
          case "course_created":
            await createCourseService(JSON.parse(message.value.toString()));
            break;
          default:
            console.log("Invalid Message key ", message.key.toString().trim());
        }
      },
    });
  } catch (err) {
    console.log("Kafka Consumer Error ", err);
    throw err;
  }
};

module.exports = startKafkaConsumerService;
