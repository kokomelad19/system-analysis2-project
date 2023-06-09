const { producer } = require("../kafka");

module.exports = async (key, message) => {
  try {
    await producer.send({
      topic: process.env.KAFKA_TOPIC,
      messages: [{ key, value: JSON.stringify(message) }],
    });
  } catch (err) {
    throw err;
  }
};
