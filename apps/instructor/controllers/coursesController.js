const Course = require("../models/course");
const { createCourseService } = require("../services/coursesService");

exports.createCourseController = async (req, res) => {
  try {
    await createCourseService(new Course(req.body));
  } catch (err) {
    return res.status(400).json({ err });
  }
};
