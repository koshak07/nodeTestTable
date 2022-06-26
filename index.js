require("dotenv").config();

const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const PORT = process.env.PORT || 7000;
const models = require("./models/models");
const router = require("./routes/index.js");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, "static")));
app.use("/api", router);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(process.env.PORT);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
