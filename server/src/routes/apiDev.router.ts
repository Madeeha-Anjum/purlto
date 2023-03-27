import { Request, Response, Router } from "express";

import { UrlRecord } from "../models/urlRecord";
import db from "../db";

const apiDevRouter = Router();

apiDevRouter.get("/entries", async (req: Request, res: Response) => {
  const records = await UrlRecord.findAll();

  res.send(records);
});

apiDevRouter.delete("/reset", async (req: Request, res: Response) => {
  await db.sync({ force: true });
  res.send("Database reset");
});

export default apiDevRouter;
