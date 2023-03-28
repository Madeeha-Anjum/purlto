import { Request, Response, Router } from "express";
import dayjs from "dayjs";

import { UrlRecord } from "../models/urlRecord";
import { generateSlug } from "../utils/slug.util";
import config from "../config";

const apiRouter = Router();

apiRouter.post("/shorten", async (req: Request, res: Response) => {
  const { longUrl } = req.body;

  const slug = generateSlug();

  try {
    const record = await UrlRecord.create({
      longUrl,
      slug: String(slug),
    });

    res.status(201).send(record);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong when creating the record");
  }
});

export default apiRouter;
