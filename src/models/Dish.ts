import { Schema, model, Model, ObjectId } from "mongoose";

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
  quantity: number;
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
    quantity: {
      type: Number,
      default: 0,
    },
    veg: {
      type: Boolean,
    },
    type: {
      type: String,
      enum: ["MAIN_COURSE", "FAST_FOOD", "DESSERT"],
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
