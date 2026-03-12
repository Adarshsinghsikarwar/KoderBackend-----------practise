import express from "express";
import { register, getMe, logout } from "../controllers/auth.controllers.js";
import multer from "multer";


const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/getMe", getMe);
authRoutes.post("/logout", logout);

export default authRoutes;
