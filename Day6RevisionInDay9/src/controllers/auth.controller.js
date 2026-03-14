import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import { config } from "../config/config.js";

async function register(req, res) {
  const { name, email, password } = req.body;

  const user = await userModel.create({
    name,
    email,
    password,
  });

  const token = jwt.sign({ id: user._id }, config.SECRET_KEY);
  res.cookie("token", token);

  res.status(201).json({
    message: "user created successfully",
  });
}

async function getMe(req, res) {
  const { token } = req.cookie;

  const decoded = jwt.verify(token, config.SECRET_KEY);

  res.status(200).json({
    message: "fetched data successfully",
    decoded,
  });
}

async function logout(req, res) {
  res.clearCookie("token");

  res.status(200).json({
    message: "user logout successfully",
  });
}
