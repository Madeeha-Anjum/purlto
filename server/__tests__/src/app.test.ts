import supertest from "supertest";
import dayjs from "dayjs";

import { Url } from "../../src/models/url";
import createApp from "../../src/app";
import db from "../../src/db";

const app = createApp();

describe("GET /", () => {
  test("it should return 200 OK", async () => {
    const response = await supertest(app).get("/");
    expect(response.status).toBe(200);
  });
});
