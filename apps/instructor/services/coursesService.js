const sendKafkaMessage = require("./producerService");

exports.createCourseService = async (course) => {
  try {
    // SEND in kafka
    await sendKafkaMessage("course_created", course);
    console.log("Course is sent to kafka ✅");
  } catch (err) {
    throw err;
  }
};
