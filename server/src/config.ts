import { getRequiredEnv } from "./utils/helpers.util";

const generateConfig = () => ({
  NODE_ENV: getNodeEnv("NODE_ENV"),
  SERVER_PORT: getRequiredEnv("PORT"),
  SHOW_LOGS: getNodeEnv("NODE_ENV") !== NODE_ENV.TEST,
  URL_EXPIRATION_TIME: Number(getRequiredEnv("URL_EXPIRATION_TIME")),
  DB: {
    HOST: getRequiredEnv("MYSQL_HOST"),
    PORT: Number(getRequiredEnv("MYSQL_PORT")),
    USER: getRequiredEnv("MYSQL_USER"),
    PASSWORD: getRequiredEnv("MYSQL_PASSWORD"),
    DB_NAME: getRequiredEnv("MYSQL_DB"),
    // determines if we should show sequelize logs
    SHOW_SEQUELIZE_LOGS: getNodeEnv("NODE_ENV") !== NODE_ENV.TEST,
  },
});

// This enum is used to determine the environment we are running in
// We can easily add/remove values as needed
// This way, we can compare config.nodeEnv to NODE_ENV.PRODUCTION for example, instead of comparing strings
enum NODE_ENV {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
  STAGING = "staging",
  TEST = "test",
}

function getNodeEnv(nodeEnvVarKey: string): NODE_ENV {
  const nodeEnv = getRequiredEnv(nodeEnvVarKey).toLowerCase();

  if (nodeEnv === NODE_ENV.PRODUCTION) {
    return NODE_ENV.PRODUCTION;
  } else if (nodeEnv === NODE_ENV.DEVELOPMENT) {
    return NODE_ENV.DEVELOPMENT;
  } else if (nodeEnv === NODE_ENV.STAGING) {
    return NODE_ENV.STAGING;
  } else if (nodeEnv === NODE_ENV.TEST) {
    return NODE_ENV.TEST;
  }

  throw new Error(`Invalid NODE_ENV value: ${nodeEnv}`);
}

// export the enum NODE_ENV
export { NODE_ENV };
// export the **value** of generateConfig(), not the function generateConfig
export default generateConfig();
