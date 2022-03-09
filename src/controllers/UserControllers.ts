//@ts-nocheck
import { RequestHandler, Response } from "express";
import { User } from "../models/User";
import { AuthRequest } from "../types/RequestWithUser";
import log from "./../utility/log";

export const fetchFavouritesHandler: RequestHandler = async (req: AuthRequest, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(404).json({
      msg: "Data for the user was not found on the server.",
    });
  }

  try {
    // This should populate
    const foundUser = await User.findOne({ email: user.email }).populate("dish");
    const foodFavourites = foundUser?.foodFavourites;
    res.status(200).json({
      foodFavourites,
    });
  } catch (error) {
    res.status(500).json({
      msg: "There was some error while fetching your favourites.",
      code: "INTERNAL_ERROR",
    });
  }
};

export const fetchCartHandler: RequestHandler = async (req: AuthRequest, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(404).json({
      msg: "Data for the user was not found on the server.",
    });
  }

  try {
    // This should populate
    const foundUser = await User.findOne({
      email: user.email,
    });
    const foodCart = foundUser?.foodCart;
    res.status(200).json({
      foodCart,
    });
  } catch (error) {
    res.status(500).json({
      msg: "There was some error while fetching your cart.",
      code: "INTERNAL_ERROR",
    });
  }
};

export const modifyFavouritesHandler: RequestHandler = async (req: AuthRequest, res: Response) => {
  const user = req.user;
  const type = req.body.type;
  const id = req.body._id;

  if (!user) {
    return res.status(404).json({
      msg: "Data for the user was not found on the server.",
    });
  }

  try {
    const foundUser = await User.findOne({
      email: user.email,
    });
    switch (type) {
      case "ADD_TO_FAVOURITES":
        const isFavourited = await User.findOneAndUpdate(
          {
            email: user.email,
          },
          {
            $addToSet: {
              foodFavourites: id,
            },
          },
          { new: true, useFindAndModify: false }
        );
        res.status(200).json({
          isFavourited,
        });
        break;
      case "REMOVE_FROM_FAVOURITES":
        log.info("hello");
        const isUnfavourited = await User.findOneAndUpdate(
          {
            email: user.email,
          },
          {
            $pull: {
              foodFavourites: id,
            },
          }
        );
        res.status(200).json({
          isUnfavourited,
        });
        break;
      default:
        res.status(200).json({
          foundUser,
        });
        break;
    }
  } catch (error) {
    res.status(500).json({
      msg: "There was some error while performing the action on your cart.",
      code: "INTERNAL_ERROR",
      error: error,
    });
  }
};

export const modifyCartHandler: RequestHandler = async (req: AuthRequest, res: Response) => {
  const user = req.user;
  const type = req.body.type;
  const id = req.body._id;
  const quantity = req.body.quantity || 1;

  if (!user) {
    return res.status(404).json({
      msg: "Data for the user was not found on the server.",
    });
  }

  try {
    const foundUser = await User.findOne({
      email: user.email,
    });
    switch (type) {
      case "ADD_TO_CART":
        const addedToCart = await User.findOneAndUpdate(
          {
            email: user.email,
          },
          {
            $addToSet: {
              foodCart: { _id: id, quantity: quantity },
            },
          },
          { new: true, useFindAndModify: false }
        );
        res.status(200).json({
          addedToCart,
        });
        break;
      case "REMOVE_FROM_CART":
        const removedFromCart = await User.findOneAndUpdate(
          {
            email: user.email,
          },
          {
            $pull: {
              foodCart: { _id: id, quantity: quantity },
            },
          }
        );
        res.status(200).json({
          removedFromCart,
        });
        break;
      case "ADD_QUANTITY_IN_CART":
        const addQuantityToCart = await User.findOneAndUpdate(
          {
            email: user.email,
          },
          {
            foodCart: { _id: id, quantity: quantity + 1 },
          },
          { new: true, useFindAndModify: false }
        );
        res.status(200).json({
          addQuantityToCart,
        });
        break;
      case "SUBTRACT_QUANTITY_IN_CART":
        const subtractQuantityFromCart = await User.findOneAndUpdate(
          {
            email: user.email,
          },
          {
            foodCart: { _id: id, quantity: quantity - 1 },
          },
          { new: true, useFindAndModify: false }
        );
        res.status(200).json({
          subtractQuantityFromCart,
        });
        break;

      default:
        res.status(200).json({
          foundUser,
        });
        break;
    }
  } catch (error) {
    res.status(500).json({
      msg: "There was some error while performing the action on your cart.",
      code: "INTERNAL_ERROR",
      error: error,
    });
  }
};
