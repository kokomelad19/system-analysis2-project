const { Router } = require("express");
const validationMiddleware = require("../middlewares/validationMiddleware");
const {
  createCourseController,
  updateCourseController,
  deleteCourseByIdController,
} = require("../controllers/coursesController");
const CreateCourseDto = require("../dto/createCourseDto");
const updateCourseDto = require("../dto/updateCourseDto");
const paramsIdSchema = require("../dto/paramsIdDto");

const coursesRouter = Router();

// Create Course
coursesRouter.post(
  "/",
  validationMiddleware(CreateCourseDto),
  createCourseController
);

// Update Course
coursesRouter.put(
  "/:id",
  validationMiddleware(paramsIdSchema, "params"),
  validationMiddleware(updateCourseDto),
  updateCourseController
);

// Delete Course
coursesRouter.delete(
  "/:id",
  validationMiddleware(paramsIdSchema, "params"),
  deleteCourseByIdController
);

module.exports = coursesRouter;
