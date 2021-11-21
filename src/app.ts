import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/corsOptions";
import log from "./utility/log";
import { makeConnection } from "./database/mongodb";
import path from "path";
dotenv.config();

makeConnection();

const app: Application = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// Routes
app.use("/api/auth", require("./router/AuthRoutes"));
app.use("/api/dishes", require("./router/DishRoutes"));

// Global Error Catcher

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === "development") {
    log.error(err.stack);
  }

  res.status(500).json({
    message: err.message,
  });
});

// Global 404 Route

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    msg: "Requested data was not found on the server.",
  });
  next();
});

// This helps us debug better incase of unhandledRejection of any promise.

process.on("unhandledRejection", (error: Error) => {
  log.error(`❎ unhandledRejection : ${error} \n ErrorStack : ${error.stack}`);
  process.exit(1);
});

// Any exception we forgot to catch will be logged here.

process.on("uncaughtException", (error: Error) => {
  log.error(`❎ uncaughtException :  ${error.stack}`);
  process.exit(1);
});

export = app;
