const { Router } = require("express");
const validationMiddleware = require("../middlewares/validationMiddleware");
const paramsIdSchema = require("../dto/paramsIdDto");
const {
  getAllCoursesController,
  getCourseByIdController,
} = require("../controllers/coursesController");

const coursesRouter = Router();

// Get All Courses
coursesRouter.get("/", getAllCoursesController);

// Get Course By ID
coursesRouter.get(
  "/:id",
  validationMiddleware(paramsIdSchema, "params"),
  getCourseByIdController
);

module.exports = coursesRouter;
