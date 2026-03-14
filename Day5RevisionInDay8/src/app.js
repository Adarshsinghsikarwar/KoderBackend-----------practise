import express from "express";
import authRoutes from "./controllers/auth.controller.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(authRoutes);

export default app;
