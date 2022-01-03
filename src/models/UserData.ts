import { Schema, model, Model, ObjectId } from "mongoose";

export interface IUserData {
  cart: {
    productId: ObjectId;
  };
  favourites: {
    productId: ObjectId;
  };
}

const userData = new Schema<IUserData, Model<IUserData>, IUserData>({
  cart: {
    productId: {
      name: String,
    },
  },
  favourites: {
    productId: {
      name: String,
    },
  },
});

export const UserData = model<IUserData>("UserData", userData);
