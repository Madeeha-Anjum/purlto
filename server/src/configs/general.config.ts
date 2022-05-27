import { getRequiredEnv } from "../utils/helpers.util";

export enum NODE_ENV {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
  STAGING = "staging",
  TEST = "test",
}

export default {
  port: getRequiredEnv("PORT"),
  nodeEnv: getNodeEnv("NODE_ENV"),
  urlExpirationTime: Number(getRequiredEnv("URL_EXPIRATION_TIME")),
};

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
