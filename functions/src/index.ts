import * as functions from "firebase-functions";
import express, {NextFunction, Request, Response} from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

import {authRouter} from "./routers/authrouter";
import {chatRouter} from "./routers/chatrouter";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/chat", chatRouter);
app.get("/", (req: Request, res: Response) => res.status(200).send("howdy Mr. Pickle butt"));

app.use("*", (req: Request, res: Response) => res.status(404).json("ERROR 404: not found"));

app.use( (err: unknown, req: Request, res: Response, next: NextFunction) => {
  const errObj = {};
  type Error = {
    message: string,
    error: number,
    log: string
  }
  const defaultErr: Error = {
    message: "server error",
    error: 500,
    log: "something went terribly wrong 0_o",
  };
  Object.assign(errObj, defaultErr, err);
  return next(errObj);
});

exports.app = functions.https.onRequest(app);
