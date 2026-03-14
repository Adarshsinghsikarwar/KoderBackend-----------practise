import jwt from "jsonwebtoken";
import userMoel from "../models/user.model.js";
import { config } from "../config/config.js";

export async function register(req, res) {
  const { name, email, password, userType } = req.body;
  const user = await userMoel.create({ name, email, password, userType });

  const token = jwt.sign({ id: user._id }, config.SECRET_KEY, {
    expiresIn: "1h",
  });

  res.cookie("token", token);

  res.status(201).json({
    message: "user created successfully",
  });
}

export async function getMe(req, res) {
  const { token } = req.cookie;

  const decoded = jwt.verify(token, config.SECRET_KEY);

  res.status(200).json({
    message: "user fetched sucessfully",
  });
}

export async function logout(req, res) {
  res.clearCookie();

  res.status(200).json({
    message: "logout sucessfully",
  });
}
