const {
  getAllCoursesService,
  getCourseByIdService,
} = require("../services/coursesService");

exports.getAllCoursesController = async (req, res) => {
  try {
    const courses = await getAllCoursesService();
    return res.status(200).json(courses);
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.getCourseByIdController = async (req, res) => {
  try {
    const course = await getCourseByIdService(req.params.id);
    return res.status(200).json(course);
  } catch (err) {
    if (err["message"]) err = err["message"];
    return res.status(400).json({ err });
  }
};
