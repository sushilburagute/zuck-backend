import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { AuthRequest } from "../types/RequestWithUser";
import { TokenUser } from "../utility/authUtils";
import log from "../utility/log";

export async function requiresAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const cookie = req.cookies;
  const token = req.headers["x-auth-token"] as string;

  if (!token) {
    return res.status(401).json({
      msg: " You are not authorized to perform this action.",
      success: false,
    });
  }

  if (!token) {
    return res.status(401).json({
      msg: " You are not authorized to perform this action.",
      success: false,
    });
  }

  try {
    const decodedUser = <TokenUser>jwt.verify(token, process.env.JWT_SECRET!);
    const user = await User.findById(decodedUser.sub);

    log.info(user);

    if (!user) {
      return res.status(404).json({
        msg: "Your token is invalid",
        success: false,
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: " You are not authorized to access this resource.",
      success: false,
    });
  }
}
