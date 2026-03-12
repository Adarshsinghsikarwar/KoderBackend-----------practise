import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export async function register(req, res) {
  const { name, email, password } = req.body;

  const user = await userModel.create({
    name,
    email,
    password,
  });

  const token = jwt.sign({ id: user._id }, config.SECRET_KEY, {});
  res.cookie("token", token);

  res.status(201).json({
    message: "user created sucessfully",
  });
}

export async function getMe(req, res) {
  const { token } = req.cookie;
  const decoded = jwt.verify(token, config.SECRET_KEY);

  res.status(200).json({
    message: "user data fetched successfully",
  });
}

export async function logout(req, res) {
  res.clearCookie("token");

  re.status(200).json({
    message: "user logout successfully",
  });
}


