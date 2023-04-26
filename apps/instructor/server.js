const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log("App is running on port", process.env.EXPOSED_PORT);
});
