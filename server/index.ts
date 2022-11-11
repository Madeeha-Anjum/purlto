import "dotenv/config";
import config, { NODE_ENV } from "./src/config";
import createApp from "./src/app";
import db from "./src/db";

// force: true will drop the tables, and recreate if it already exists
db.sync({ force: config.NODE_ENV !== NODE_ENV.PRODUCTION })
  .then(() => {
    console.log("Database synced");
  })
  .then(() => {
    const app = createApp();
    app.listen(config.SERVER_PORT, () => {
      console.log(`🌿 NODE_ENV: ${config.NODE_ENV}`);
      console.log(
        `🤝 Connected To Database: ${config.DB.HOST}:${config.DB.PORT}`
      );
      console.log(
        `🚀 Server started on http://localhost:${config.SERVER_PORT}`
      );
    });
  });
