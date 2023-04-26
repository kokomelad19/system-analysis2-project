const producer = require("../kafka");

module.exports = async (key, message) => {
  try {
    await producer.connect();
    await producer.send({
      topic: process.env.KAFKA_TOPIC,
      messages: [{ key, value: JSON.stringify(message) }],
    });
    await producer.disconnect();
  } catch (err) {
    throw err;
  }
};
