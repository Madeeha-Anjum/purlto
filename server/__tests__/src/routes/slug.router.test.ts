import supertest from "supertest";
import dayjs from "dayjs";
import { UniqueConstraintError } from "sequelize";

import { UrlRecord } from "../../../src/models/urlRecord";
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

describe("GET /:slug", () => {
  test("it should redirect to the long url", async () => {
    const testUrlRecord = {
      longUrl: "https://www.google.com",
      slug: "abc",
    };

    await UrlRecord.create(testUrlRecord);

    const response = await supertest(app)
      .get(`/${testUrlRecord.slug}`)
      .expect(200);

    expect(response.body).toMatchObject(testUrlRecord);
  });

  test("it should return 404 when the slug does not exist", async () => {
    await supertest(app).get("/abc").expect(404);
  });

  test("it should not create two urls with the same slug", async () => {
    const urls = [
      {
        longUrl: "https://www.google.com",
        slug: "abc",
      },
      {
        longUrl: "https://nodejs.org/en/",
        slug: "abc",
      },
    ];

    await expect(UrlRecord.bulkCreate(urls)).rejects.toThrow(
      UniqueConstraintError
    );
  });
});
