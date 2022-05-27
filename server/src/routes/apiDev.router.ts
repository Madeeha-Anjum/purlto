import { Request, Response, Router } from "express";

import { Url } from "../models/url";
import db from "../db";

const apiDevRouter = Router();

apiDevRouter.get("/urls", async (req: Request, res: Response) => {
  const records = await Url.findAll();

  res.send(records);
});

apiDevRouter.delete("/reset", async (req: Request, res: Response) => {
  await db.sync({ force: true });
  res.send("Database reset");
});

export default apiDevRouter;
