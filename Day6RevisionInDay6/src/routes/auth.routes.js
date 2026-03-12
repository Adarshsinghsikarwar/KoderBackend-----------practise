import express from "express";
import { register, getMe, logout } from "../controllers/user.controllers.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoute.post("getMe", getMe);
authRoutes.post("/logout", logout);

export default authRoutes;
