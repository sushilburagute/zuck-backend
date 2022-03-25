import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  // origin: ["http://localhost:3000", "http://localhost:5000", 'https://zuck-food.vercel.app/'],
  origin: ["https://zuck-food.vercel.app/"],
  optionsSuccessStatus: 200,
  credentials: true,
  exposedHeaders: ["set-cookie"],
};
