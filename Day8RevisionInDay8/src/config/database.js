import mongoose from "mongoose";
import { config } from "./config.js";

export async function connectToDB(req, res) {
  await mongoose.connect(config.MONGO_URI);
}
