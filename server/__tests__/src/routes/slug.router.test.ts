import supertest from "supertest";
import dayjs from "dayjs";

import { Url } from "../../../src/models/url";
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
    const url = {
      longUrl: "https://www.google.com",
      slug: "abc",
      expires: dayjs().add(1, "day").toDate(),
    };

    await Url.create(url);

    const response = await supertest(app).get(`/${url.slug}`).expect(302);

    expect(response.header.location).toBe(url.longUrl);
  });

  test("it should return 404 when the slug does not exist", async () => {
    await supertest(app).get("/abc").expect(404);
  });

  test("it should return 404 when the slug is expired", async () => {
    const url = {
      longUrl: "https://www.google.com",
      slug: "abc",
      expires: dayjs().subtract(1, "day").toDate(),
    };

    await Url.create(url);

    await supertest(app).get(`/${url.slug}`).expect(404);
  });

  test("it should return the url with the latest expiry date if there are two urls with the same slug", async () => {
    const urls = [
      {
        longUrl: "https://www.google.com",
        slug: "abc",
        expires: dayjs().add(1, "hour").toDate(),
      },
      {
        longUrl: "https://nodejs.org/en/",
        slug: "abc",
        expires: dayjs().add(1, "day").toDate(),
      },
    ];

    await Url.bulkCreate(urls);

    const response = await supertest(app).get(`/${urls[1].slug}`).expect(302);

    expect(response.header.location).toBe(urls[1].longUrl);
  });
});
