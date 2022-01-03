import { Schema, model, Model } from "mongoose";

enum DishType {
  DESSERT = "DESSERT",
  MAIN_COURSE = "MAIN_COURSE",
  FAST_FOOD = "FAST_FOOD",
}

export interface IDish {
  name: string;
  deliveryTime: number;
  price: number;
  discount: number;
  rating: number;
  veg: boolean;
  type: DishType;
  image: string;
  description: string;
}

const dishSchema = new Schema<IDish, Model<IDish>, IDish>(
  {
    name: {
      type: String,
    },
    deliveryTime: {
      type: Number,
    },
    price: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    veg: {
      type: Boolean,
    },
    type: {
      type: String,
      enum: ["Main Course", "Fast Food", "Dessert"],
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Dish = model<IDish>("Dish", dishSchema);
