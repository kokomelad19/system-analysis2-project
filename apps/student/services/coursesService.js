const createCourseDto = require("../dto/createCourseDto");
const updateCourseDto = require("../dto/updateCourseDto");
const paramsIdDto = require("../dto/paramsIdDto");
const Course = require("../models/course");

exports.createCourseService = async (courseData) => {
  try {
    const course = await createCourseDto.validateAsync(courseData);

    console.log("Create Course received ", course);
    const createdCourse = await Course.create(course);
    console.log("Created Course =  ", createdCourse.get({ plain: true }));
  } catch (err) {
    console.log("Service createCourseService Error ⚡⚡ ", err);
    throw err;
  }
};

exports.updateCourseService = async (updateData) => {
  try {
    const result = await updateCourseDto.validateAsync(updateData);

    console.log("Update Course received ", result.course);
    await Course.update(result.course, {
      where: result.where,
    });
    console.log("Course Updated ✅");
  } catch (err) {
    console.log("Service updateCourseService Error ⚡⚡ ", err);
    throw err;
  }
};

exports.deleteCourseByIdService = async (params) => {
  try {
    const where = await paramsIdDto.validateAsync(params);

    console.log("Delete Course received ", where);
    await Course.destroy({ where });
    console.log("Course Deleted ✅");
  } catch (err) {
    console.log("Service deleteCourseByIdService Error ⚡⚡ ", err);
    throw err;
  }
};

exports.getAllCoursesService = async () => {
  try {
    return await Course.findAll();
  } catch (err) {
    throw err;
  }
};

exports.getCourseByIdService = async (id) => {
  try {
    const result = await paramsIdDto.validateAsync({ id });

    const course = await Course.findOne({ where: { id: result.id } });
    if (!course) throw new Error("Course is not exist");

    return course;
  } catch (err) {
    throw err;
  }
};
