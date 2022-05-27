import { Request, Response, Router } from "express";
import { Op } from "sequelize";
import dayjs from "dayjs";

import { Url } from "../models/url";

const slugRouter = Router();

slugRouter.get("/:slug", async (req: Request, res: Response) => {
  const { slug } = req.params;

  const record = await Url.findOne({
    where: {
      slug: slug,
      expires: {
        [Op.gte]: dayjs().toDate(),
      },
    },
    // if there is more than one url with the same slug, return the one with the latest expire date
    // this should never happen because there should new urls should only be added when a slug expires
    order: [["expires", "DESC"]],
  });

  if (!record) {
    return res.status(404).send("URL not found");
  }

  res.redirect(record!.longUrl);
});

export default slugRouter;
