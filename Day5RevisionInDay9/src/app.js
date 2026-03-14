import express from "express";
import authRoutes from "./routes/auth.routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

export default app;
