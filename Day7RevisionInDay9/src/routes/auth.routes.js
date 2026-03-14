import express from "express";
import { getMe, register, logout } from "../controllers/auth.controller.js";
import multer, { memoryStorage } from "multer";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/getMe", getMe);
authRoutes.post("/register", logout);

export default authRoutes;
