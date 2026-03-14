import express from "express";
import { getMe, logout, register } from "../controllers/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/getMe", getMe);
authRoutes.post("/logout", logout);

export default authRoutes;
