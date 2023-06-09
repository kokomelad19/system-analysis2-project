const express = require("express");
const coursesRouter = require("./routes/courses");

const app = express();
//#region Middlewares
app.use(express.json());
//#endregion

//#region Routes
const mainRouter = express.Router();
app.use("/api", mainRouter);

mainRouter.use("/courses", coursesRouter);

// Not Found Routes
app.use("*", (req, res) => {
  return res.status(400).json({ message: "API not found" });
});
//#endregion

module.exports = app;
