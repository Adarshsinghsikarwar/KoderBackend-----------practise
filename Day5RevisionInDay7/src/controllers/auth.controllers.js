import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export async function register(req, res) {
  const { name, email, password } = req.body;

  const user = await userModel.create({ name, email, password });

  const token = jwt.sign({ id: user._id }, config.SECRET_URI, {});

  res.cookie("token", token);

  res.status(201).json({
    message: "user created successfully",
  });
}
