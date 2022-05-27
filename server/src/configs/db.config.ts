import { getRequiredEnv } from "../utils/helpers.util";
import generalConfig, { NODE_ENV } from "./general.config";

export default {
  host: getRequiredEnv("MYSQL_HOST"),
  port: getRequiredEnv("MYSQL_PORT"),
  user: getRequiredEnv("MYSQL_USER"),
  password: getRequiredEnv("MYSQL_PASSWORD"),
  db: getRequiredEnv("MYSQL_DB"),
  // determines if we should show sequelize logs
  sequelizeLogging: generalConfig.nodeEnv !== NODE_ENV.TEST,
};
