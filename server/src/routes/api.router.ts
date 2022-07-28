import { Request, Response, Router } from "express";
import dayjs from "dayjs";

import { Url } from "../models/url";
import { generateSlug } from "../utils/slug.util";
import config from "../config";

const apiRouter = Router();

apiRouter.post("/shorten", async (req: Request, res: Response) => {
  const { url: longUrl } = req.body;

  const slug = generateSlug();

  const url = {
    slug: String(slug),
    expires: dayjs().add(config.URL_EXPIRATION_TIME, "second").toDate(),
    longUrl,
  };

  const record = await Url.create(url);

  res.status(201).send(record);
});

export default apiRouter;
