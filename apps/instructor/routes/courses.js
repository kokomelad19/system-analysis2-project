const { Router } = require("express");
const validationMiddleware = require("../middlewares/validationMiddleware");
const { createCourseController } = require("../controllers/coursesController");
const CreateCourseDto = require("../dto/createCourseDto");

const coursesRouter = Router();

// Create Course
coursesRouter.post(
  "/",
  validationMiddleware(CreateCourseDto),
  createCourseController
);

module.exports = coursesRouter;
