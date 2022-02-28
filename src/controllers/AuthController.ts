import { RequestHandler, Response } from "express";
import { User } from "../models/User";
import { SignInBody, SignUpBody } from "../validation/AuthValidation";
import log from "../utility/log";
import { createToken } from "../utility/authUtils";
import { AuthRequest } from "../types/RequestWithUser";
/**
 * This handler handles user signups.
 * send POST Request at /api/auth/sign-up
 * body contains {firstName, lastName, email, password}
 * */
export const signUpHandler: RequestHandler<{}, {}, SignUpBody> = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const isAlreadyRegistered = await User.findOne({
    email,
  });

  if (isAlreadyRegistered) {
    return res.json({
      msg: "An account with that email already exists. Please try signing up using another email. ",
    });
  }

  try {
    const user = new User({
      firstName,
      lastName,
      email,
      password,
    });

    const verificationToken = await user.getEmailVerificationToken();

    await user.save((err) => {
      if (err) {
        return res.status(500).json({
          msg: "Something went wrong while registering you.",
        });
      } else {
        return res.status(200).json({
          msg: "Your Account has been created",
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong while registering you.",
      code: "INTERNAL_ERROR",
    });
  }
};

export const signInHandler: RequestHandler<{}, {}, SignInBody> = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      email,
    }).select("+password");

    if (!user) {
      return res.status(404).json({
        msg: "Incorrect email or password. Please check credentials.",
      });
    }

    const validPassword = await user.matchPasswords(password);

    if (!validPassword) {
      return res.status(404).json({
        msg: "Incorrect credentials. Please check your email or password.",
      });
    }
    const token = createToken({
      _id: user._id,
      email: user.email,
    });

    log.info("TOKEN", token);

    res.cookie("token", token, {
      httpOnly: true,
    });

    // some sort of cookie or session mgmt
    res.status(200).json({
      msg: "Logged in successfully !",
      email,
      firstName: user.firstName,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong while signing you in. Please contact support@neogcamp.com",
      code: "INTERNAL_ERROR",
    });
  }
};

export const logoutHandler: RequestHandler = async (req, res) => {
  try {
    res.cookie("token", "", { httpOnly: true });
    res.status(200).json({
      msg: "Logged out successfully.",
    });
  } catch (error) {
    res.cookie("token", "", { httpOnly: true });
    res.status(500).json({
      msg: "Logged out successfully.",
    });
  }
};

export const userInfoHandler = async (req: AuthRequest, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(404).json({
      msg: "Data for the user was not found on the server.",
    });
  }

  try {
    const foundUser = await User.findOne({
      email: user.email,
    });
    res.status(200).json({
      foundUser,
    });
  } catch (error) {
    res.status(500).json({
      msg: "There was some error while fetching user information.",
      code: "INTERNAL_ERROR",
    });
  }
};
