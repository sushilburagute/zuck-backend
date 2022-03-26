import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  // origin: ["http://localhost:3000", "http://localhost:5000"],
  origin: ["https://zuck-food.vercel.app", "https://zuck-backend.up.railway.app", 'https://zuck-frontend-git-development-sushilburagute.vercel.app'],
  optionsSuccessStatus: 200,
  credentials: true,
  exposedHeaders: ["set-cookie"],
};
