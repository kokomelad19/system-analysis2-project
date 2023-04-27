const sendKafkaMessage = require("./producerService");
const createCourseDto = require("../dto/createCourseDto");
const updateCourseDto = require("../dto/updateCourseDto");
const paramsIdDto = require("../dto/paramsIdDto");
const Course = require("../models/course");

exports.createCourseService = async (courseData) => {
  try {
    // validate and construct course model class
    const course = await Course.validateAndConstruct(
      courseData,
      createCourseDto
    );

    // SEND course in kafka
    await sendKafkaMessage("course_created", course);
    // Log that message has been sent to kafka
    console.log("Course create message is sent to kafka ✅ ", course);

    return course;
  } catch (err) {
    throw err;
  }
};

exports.updateCourseService = async (id, courseData) => {
  try {
    const [params, course] = await Promise.all([
      paramsIdDto.validateAsync({ id }),
      Course.validateAndConstruct(courseData, updateCourseDto),
    ]);

    await sendKafkaMessage("course_updated", { where: params, course });
    // Log that message has been sent to kafka
    console.log("Course update message is sent to kafka ✅ ", {
      where: params,
      course,
    });

    return course;
  } catch (err) {
    throw err;
  }
};

exports.deleteCourseByIdService = async (id) => {
  try {
    const params = await paramsIdDto.validateAsync({ id });

    await sendKafkaMessage("course_deleted", params);
    // Log that message has been sent to kafka
    console.log("Course delete message is sent to kafka ✅ ", params);
  } catch (err) {
    throw err;
  }
};
