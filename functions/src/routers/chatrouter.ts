import express, {Request, Response} from "express";

export const chatRouter = express.Router();

import {generateResponse} from "../controllers/chatcontroller";

chatRouter.post("/query", generateResponse, (req: Request, res: Response) => {
  res.status(200).json(res.locals.chatRes);
});

