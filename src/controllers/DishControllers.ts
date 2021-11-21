import { RequestHandler, Response } from "express";

export const dishList: RequestHandler = (req, res) => {
  res.json({ msg: "All dishes" });
};
