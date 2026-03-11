import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  const { name, email, password } = req.body;

  const user = await userModel.create({
    name,
    email,
    password,
  });

  const token = jwt.sign({ id: user._id }, "", { expiresIn: "1d" });
  res.status(201).json({
    message: "note created successfully",
  });
}

export async function getMe(req, res) {
  const { token } = req.body;

  const decoded = jwt.verify(token, "Secret Key");

  res.status(200).json({
    message: "fetched all the data",
    decoded,
  });
}
