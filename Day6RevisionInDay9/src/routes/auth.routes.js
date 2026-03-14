import express from "express";
import { register, getMe, logout } from "../controllers/auth.controller.js";
const authRoutes = express();

authRoutes.post("/register", register);
authRoutes.post("/getMe", getMe);
authRoutes.post("/logout", logout);

export default authRoutes;
