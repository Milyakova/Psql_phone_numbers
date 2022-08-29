const express = require("express");
const config = require("config");
const sequelize = require("./db");
const cors = require("cors");
const router = require("./routes/index");
const initDataBase=require('./startUp/initDatabase')
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = config.get("PORT") ?? 8081;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    initDataBase()
    app.listen(PORT, () => console.log(`Server is working on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
