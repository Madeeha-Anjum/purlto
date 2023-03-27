import { Request, Response, Router } from "express";
import dayjs from "dayjs";

import { UrlRecord } from "../models/urlRecord";

const slugRouter = Router();

slugRouter.get("/:slug", async (req: Request, res: Response) => {
  const { slug } = req.params;

  const record = await UrlRecord.findOne({
    where: {
      slug: slug,
    },
  });

  if (!record) {
    return res.status(404).send("URL not found");
  }

  // update the record
  await record.increment("hits", {
    by: 1,
  });

  await record.update({
    lastAccessedAt: dayjs().toDate(),
  });

  // reload the record to get the updated values
  const updatedRecord = await record.reload();

  res.send(updatedRecord);
});

export default slugRouter;
