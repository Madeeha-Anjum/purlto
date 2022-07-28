import supertest from "supertest";
import dayjs from "dayjs";

import { Url } from "../../../src/models/url";
import createApp from "../../../src/app";
import db from "../../../src/db";

const app = createApp();

// small helper function to check if two dates are close enough to be considered equal
function areDatesClose(date1: Date, date2: Date) {
  // diff is in milliseconds
  const diff = dayjs(date1).diff(date2);
  return Math.abs(diff) < 1000;
}

beforeEach(async () => {
  // reset database before each test
  await db.sync({ force: true });
});

afterAll(async () => {
  // close database connection after all tests
  // this avoid the jest error "jest did not exit one second after the test run has completed"
  await db.close();
});

describe("GET /api/v1/dev/urls", () => {
  test("it should return 0 urls when no urls are added", async () => {
    const response = await supertest(app).get("/api/v1/dev/urls").expect(200);
    expect(response.body.length).toBe(0);
  });

  test("it should return 1 url when 1 url is added", async () => {
    const url = {
      longUrl: "https://www.google.com",
      slug: "abc",
      expires: new Date(),
    };

    await Url.create(url);

    const response = await supertest(app).get("/api/v1/dev/urls").expect(200);

    expect(response.body.length).toBe(1);

    const actualRecord = response.body[0];

    expect(actualRecord).toEqual(
      expect.objectContaining({
        longUrl: url.longUrl,
        slug: url.slug,
      })
    );

    expect(areDatesClose(actualRecord.expires, url.expires)).toBe(true);
  });

  test("it should return 2 urls when 2 urls are added", async () => {
    const urls = [
      {
        longUrl: "https://www.google.com",
        slug: "abc",
        expires: new Date(),
      },
      {
        longUrl: "https://nodejs.org/en/",
        slug: "def",
        expires: new Date(),
      },
    ];

    await Url.bulkCreate(urls);

    const response = await supertest(app).get("/api/v1/dev/urls").expect(200);

    expect(response.body.length).toBe(2);

    for (let i = 0; i < response.body.length; i++) {
      const actualRecord = response.body[i];
      const url = urls[i];

      expect(actualRecord).toEqual(
        expect.objectContaining({
          longUrl: url.longUrl,
          slug: url.slug,
        })
      );

      expect(areDatesClose(actualRecord.expires, url.expires)).toBe(true);
    }
  });

  test("it should return 3 urls when 3 urls are added", async () => {
    const urls = [
      {
        longUrl: "https://www.google.com",
        slug: "abc",
        expires: new Date(),
      },
      {
        longUrl: "https://nodejs.org/en/",
        slug: "def",
        expires: new Date(),
      },
      {
        longUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        slug: "ghi",
        expires: new Date(),
      },
    ];

    await Url.bulkCreate(urls);

    const response = await supertest(app).get("/api/v1/dev/urls").expect(200);

    expect(response.body.length).toBe(3);

    for (let i = 0; i < response.body.length; i++) {
      const actualRecord = response.body[i];
      const url = urls[i];

      expect(actualRecord).toEqual(
        expect.objectContaining({
          longUrl: url.longUrl,
          slug: url.slug,
        })
      );
      expect(areDatesClose(actualRecord.expires, url.expires)).toBe(true);
    }
  });

  test("it should allow adding two urls with different expiry dates", async () => {
    const urls = [
      {
        longUrl: "https://www.google.com",
        slug: "abc",
        expires: new Date(),
      },
      {
        longUrl: "https://nodejs.org/en/",
        slug: "abc",
        expires: dayjs().add(1, "day").toDate(),
      },
    ];

    await Url.bulkCreate(urls);

    const response = await supertest(app).get("/api/v1/dev/urls").expect(200);

    expect(response.body.length).toBe(2);

    for (let i = 0; i < response.body.length; i++) {
      const actualRecord = response.body[i];
      const url = urls[i];

      expect(actualRecord).toEqual(
        expect.objectContaining({
          longUrl: url.longUrl,
          slug: url.slug,
        })
      );
      expect(areDatesClose(actualRecord.expires, url.expires)).toBe(true);
    }
  });
});

describe("DELETE /api/v1/dev/reset", () => {
  test("it should reset the database", async () => {
    const url = {
      longUrl: "https://www.google.com",
      slug: "abc",
      expires: new Date(),
    };

    await Url.create(url);

    await supertest(app).delete("/api/v1/dev/reset").expect(200);

    const response = await supertest(app).get("/api/v1/dev/urls").expect(200);

    expect(response.body.length).toBe(0);
  });
});
