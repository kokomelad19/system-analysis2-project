const {
  createCourseService,
  updateCourseService,
  deleteCourseByIdService,
} = require("../services/coursesService");

exports.createCourseController = async (req, res) => {
  try {
    const course = await createCourseService(req.body);
    return res.status(201).json(course);
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.updateCourseController = async (req, res) => {
  try {
    const course = await updateCourseService(req.params.id, req.body);
    return res.status(200).json(course);
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.deleteCourseByIdController = async (req, res) => {
  try {
    await deleteCourseByIdService(req.params.id);
    return res.status(204).json();
  } catch (err) {
    return res.status(400).json({ err });
  }
};
