import dotenv from "dotenv";

export default function setupTests() {
  // Use .env.test.local file to configure environment variables
  dotenv.config({
    path: ".env.test.local",
  });
}
