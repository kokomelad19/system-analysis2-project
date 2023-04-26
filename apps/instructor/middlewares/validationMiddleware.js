const validationMiddleware = (schema, target = "body") => {
  return async (req, res, next) => {
    try {
      const result = await schema.validateAsync(req[target]);
      if (!result) {
        return res.status(400).json({ message: "Invalid Request" });
      }
      req.body = result;
      next();
    } catch (err) {
      res.status(400).send(err);
    }
  };
};

module.exports = validationMiddleware;
