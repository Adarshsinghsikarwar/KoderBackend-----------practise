import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signUp(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({
        message: "All fields are required",
      });
      return;
    }
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      res.status(400).json({
        message: "User already exists",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (err) {
    console.log("Error --> ", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "All fields are required",
      });
      return;
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(401).json({
        message: "Invalid credentials",
      });
      return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({
        message: "Invalid credentials",
      });
      return;
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      message: "User logged in successfully",
      user,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function logOut(req, res) {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export default {
  signUp,
  signIn,
  logOut,
};
