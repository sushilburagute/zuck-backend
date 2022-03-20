import { RequestHandler, Response } from "express";
import { Dish } from "../models/Dish";

export const dishList: RequestHandler = async (req, res) => {
  try {
    const allDishes = await Dish.find({});

    if (!allDishes) {
      return res.status(404).json({
        msg: "We couldn't retrive the Dishes at the moment.",
      });
    }

    res.status(200).json({
      msg: "Dishes Fetched!",
      allDishes,
    });
  } catch (error) {
    res.json({
      code: 400,
      msg: error,
    });
  }
};

export const findDish: RequestHandler = async (req, res) => {
  const dishID = req.params.id;
  try {
    const dishItem = await Dish.find({ _id: dishID });
    if (!dishItem) {
      return res.status(404).json({
        msg: "Sorry! That dish doesn't exist on our database.",
      });
    }

    res.status(200).json({
      msg: "Dish Fetched!",
      dishItem,
    });
  } catch (error) {
    res.json({
      code: 400,
      msg: "Sorry! That dish doesn't exist on our database.",
      error: error,
    });
  }
};
