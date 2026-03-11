import express from "express";
import { register, getMe } from "../controllers/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/getMe", getMe);

export default authRoutes;
