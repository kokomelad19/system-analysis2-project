const Course = require("../models/course");
const { createCourseService } = require("../services/coursesService");

exports.createCourseController = async (req, res) => {
  try {
    const course = new Course(req.body);
    await createCourseService(course);
    return res.status(201).json(course);
  } catch (err) {
    return res.status(400).json({ err });
  }
};
