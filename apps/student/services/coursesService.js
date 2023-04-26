const createCourseDto = require("../dto/createCourseDto");
const Course = require("../models/course");

exports.createCourseService = async (course) => {
  try {
    const { error } = createCourseDto.validate(dto);
    if (error) throw new Error("Invalid Course Data");

    console.log("Create Course received ", course);
    await Course.create(course);
  } catch (err) {
    throw err;
  }
};
