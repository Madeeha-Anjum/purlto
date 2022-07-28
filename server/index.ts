import "dotenv/config";
import config from "./src/config";
import createApp from "./src/app";
import db from "./src/db";

// force: true will drop the tables, and recreate if it already exists
db.sync({ force: true })
  .then(() => {
    console.log("Database synced");
  })
  .then(() => {
    const app = createApp();
    app.listen(config.SERVER_PORT, () => {
      console.log(`🌿 NODE_ENV: ${config.NODE_ENV}`);
      console.log(
        `🚀 Server started on http://localhost:${config.SERVER_PORT}`
      );
    });
  });
