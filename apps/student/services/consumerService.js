const consumer = require("../kafka");
const {
  createCourseService,
  updateCourseService,
  deleteCourseByIdService,
} = require("./coursesService");

const startKafkaConsumerService = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({
      topic: process.env.KAFKA_TOPIC,
      fromBeginning: false,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const messageBody = message.value.toString();
        const messageKey = message.key.toString().trim();

        console.log(
          `\nMessage Received ✅🔥 \nKey = ${messageKey}\nmessage = ${messageBody}\ntopic= ${topic}\n\n`
        );

        switch (messageKey) {
          case "course_created": {
            await createCourseService(JSON.parse(messageBody));
            break;
          }
          case "course_updated":
            await updateCourseService(JSON.parse(messageBody));
            break;
          case "course_deleted":
            await deleteCourseByIdService(JSON.parse(messageBody));
            break;
          default:
            console.log("Invalid Message key ", messageKey);
        }
      },
    });
  } catch (err) {
    console.log("Kafka Consumer Error ", err);
  }
};

module.exports = startKafkaConsumerService;
