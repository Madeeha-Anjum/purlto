import supertest from "supertest";

import createApp from "../../../src/app";
import db from "../../../src/db";

const app = createApp();

beforeEach(async () => {
  // reset database before each test
  await db.sync({ force: true });
});

afterAll(async () => {
  // close database connection after all tests
  // this avoid the jest error "jest did not exit one second after the test run has completed"
  await db.close();
});

describe("POST /api/v1/shorten", () => {
  test("it should shorten a url", async () => {
    const data = {
      url: "https://www.google.com",
    };

    const response = await supertest(app)
      .post("/api/v1/shorten")
      .send(data)
      .expect(201);

    expect(response.body.longUrl).toBe(data.url);
    expect(response.body.slug).toBeDefined();
    expect(response.body.expires).toBeDefined();
  });
});
