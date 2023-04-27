const Joi = require("joi");

const paramsIdSchema = Joi.object({
  id: Joi.number().required().min(1),
});

module.exports = paramsIdSchema;
