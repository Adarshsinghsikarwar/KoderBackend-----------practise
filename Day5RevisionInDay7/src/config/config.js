import dotenv from "dotenv";
dotenv.config();

export const config = {
  MONGO_URI: process.env.MONGO_URI,
  SECRET_URI: process.env.SECRET_KEY
};
