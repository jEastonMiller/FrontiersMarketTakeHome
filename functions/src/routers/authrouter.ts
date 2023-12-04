import express, {Request, Response} from "express";

export const authRouter = express.Router();

import {addUser, login, checkUsers} from "../controllers/authcontroller";

authRouter.post("/register", addUser, (req: Request, res: Response) => {
  res.status(200).json(res.locals.newUserRes);
});

authRouter.post("/login", login, (req: Request, res: Response) => {
  res.status(200).json(res.locals.cred);
});

authRouter.get("/CheckUser", checkUsers, (req: Request, res: Response) => {
  res.status(200).json(res.locals.userExists);
});
