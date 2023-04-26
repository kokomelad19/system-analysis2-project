const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const sequelize = require("./db");

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();

app.listen(process.env.PORT, () => {
  console.log("App is running on port", process.env.EXPOSED_PORT);
});
