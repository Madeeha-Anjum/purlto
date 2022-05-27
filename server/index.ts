import "dotenv/config";
import generalConfig from "./src/configs/general.config";
import createApp from "./src/app";
import db from "./src/db";

const port = generalConfig.port;

console.log(
  `generalConfig.urlExpirationTime: ${generalConfig.urlExpirationTime}`
);

// force: true will drop the tables, and recreate if it already exists
db.sync({ force: true })
  .then(() => {
    console.log("Database synced");
  })
  .then(() => {
    const app = createApp();
    app.listen(port, () => {
      console.log(`🌿 NODE_ENV: ${generalConfig.nodeEnv}`);
      console.log(`🚀 Server started on http://localhost:${port}`);
    });
  });
