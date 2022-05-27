import { Sequelize } from "sequelize";
import config from "./configs/db.config";

const db = new Sequelize(config.db, config.user, config.password, {
  host: config.host,
  port: Number(config.port),
  dialect: "mysql",
  logging: config.sequelizeLogging,
});

export default db;
