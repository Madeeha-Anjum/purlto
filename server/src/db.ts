import { Sequelize } from "sequelize";
import config from "./config";

const db = new Sequelize(
  config.DB.DB_NAME,
  config.DB.USER,
  config.DB.PASSWORD,
  {
    host: config.DB.HOST,
    port: config.DB.PORT,
    dialect: "mysql",
    logging: config.DB.SHOW_SEQUELIZE_LOGS,
  }
);

export default db;
