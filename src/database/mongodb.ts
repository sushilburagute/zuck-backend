import mongoose from "mongoose";
import log from "./../utility/log";

export const makeConnection = async () => {
  await mongoose
    .connect(
      process.env.NODE_ENV === "development" ? process.env.DB_LOCAL! : process.env.DB_ATLAS!,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
      }
    )
    .then(() => {
      log.info(`[${process.env.NODE_ENV}]` + "✅💾 Connected to Database.");
    })
    .catch((error: Error) => {
      log.error(`🛑🚧 There was an error while connecting to Database.`, error);
    });
};
