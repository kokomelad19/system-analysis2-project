const createCourseDto = require("../dto/createCourseDto");
const Course = require("../models/course");

exports.createCourseService = async (course) => {
  try {
    const { error } = createCourseDto.validate(course);
    if (error) throw new Error("Invalid Course Data");

    console.log("Create Course received ", course);
    const createdCourse = await Course.create(course);
    console.log("Created Course =  ", createdCourse.get({ plain: true }));
  } catch (err) {
    console.log("Service createCourseService Error ⚡⚡ ", err);
    throw err;
  }
};
