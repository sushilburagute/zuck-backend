import { RequestHandler, Response, Request } from "express";
import { Dish } from "../models/Dish";

export const seedData: RequestHandler = async (req: Request, res: Response) => {
  const { name, deliveryTime, price, discount, rating, veg, type, image, description } = new Dish(
    req.body
  );

  try {
    const dish = new Dish({
      name,
      deliveryTime,
      price,
      discount,
      rating,
      veg,
      type,
      image,
      description,
    });

    await dish.save((err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          msg: "Something went wrong while saving that dish.",
        });
      } else {
        return res.status(200).json({
          msg: "New Dish has been added!",
          data: req.body,
        });
      }
    });
  } catch (error) {
    res.json({
      code: 400,
      msg: error,
    });
  }
};
