const Joi = require("joi");

const updateCourseSchema = Joi.object({
  where: Joi.object({
    id: Joi.number().required().min(1),
  }),
  course: Joi.object({
    name: Joi.string().required().min(3),
    creditHours: Joi.number().required().min(2),
    startDate: Joi.date().required(),
    availableSeats: Joi.number().required().min(100),
  }),
});

module.exports = updateCourseSchema;
