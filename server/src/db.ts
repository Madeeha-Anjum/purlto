import { Sequelize } from "sequelize";
import config from "./config";

const db = new Sequelize(config.db.dbName, config.db.user, config.db.password, {
  host: config.db.host,
  port: config.db.port,
  dialect: "mysql",
  logging: config.db.showSequelizeLogging,
});

export default db;
