import "dotenv/config";
import config from "./src/config";
import createApp from "./src/app";
import db from "./src/db";

const port = config.serverPort;

// force: true will drop the tables, and recreate if it already exists
db.sync({ force: true })
  .then(() => {
    console.log("Database synced");
  })
  .then(() => {
    const app = createApp();
    app.listen(port, () => {
      console.log(`🌿 NODE_ENV: ${config.nodeEnv}`);
      console.log(`🚀 Server started on http://localhost:${port}`);
    });
  });
