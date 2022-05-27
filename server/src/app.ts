import express, { Request, Response } from "express";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import compression from "compression";
import morganBody from "morgan-body";
import helmet from "helmet";
import YAML from "yamljs";
import cors from "cors";

import config, { NODE_ENV } from "./config";
import apiDevRouter from "./routes/apiDev.router";
import slugRouter from "./routes/slug.router";
import apiRouter from "./routes/api.router";

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const swaggerSpecification = YAML.load("./src/docs/swagger.yaml");

const createApp = () => {
  const app = express();

  // secures express http headers
  app.use(helmet());

  // enables cors for all routes
  app.use(cors());

  // apply rate limiting to all routes
  app.use(apiLimiter);

  // compress all routes
  app.use(compression());

  // allow the app to parse json in the body
  app.use(express.json());

  // logger which also logs the request body
  morganBody(app, {
    // skip logging if show logs is false
    skip: (req, res) => !config.showLogs,
  });

  // add all the main api routes
  app.get("/", (req: Request, res: Response) => {
    res.send(
      "Welcome To Push To Site Server! For documentation, visit: <a href='/docs'>/docs</a>"
    );
  });
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecification));
  if (config.nodeEnv !== NODE_ENV.PRODUCTION) {
    // don't expose the api dev routes in production
    app.use("/api/v1/dev", apiDevRouter);
  }
  app.use("/api/v1", apiRouter);
  app.use(slugRouter);

  return app;
};

export default createApp;
