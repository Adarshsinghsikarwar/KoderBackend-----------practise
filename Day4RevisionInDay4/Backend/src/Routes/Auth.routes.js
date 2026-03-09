import express from "express";
import authController from "../Controllers/Auth.controller.js";
import { authMiddleware } from "../Middlewares/Auth.middleware.js";

const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);
router.post("/logout", authMiddleware, authController.logOut);

export default router;
