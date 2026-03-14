import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  const { name, email, password } = req.body;
  const user = await userModel.create({ name, email, password });

  const token = jwt.sign(token, "SECRET_KEY", { expiresIn: "1h" });
  res.cookie("token", token);

  res.status(201).json({
    message: "user created successfully",
  });
}

export async function getMe(req, res) {
  const { token } = req.cookie;

  const decoded = jwt.verify(token, "SECRET_KEY");

  res.status(200).json({
    message: "user fetched successfully",
    decoded,
  });
}

export async function logout(req, res) {
  res.clearCookie("token");

  res.status(200).json({
    message: "user logout successfully",
  });
}
