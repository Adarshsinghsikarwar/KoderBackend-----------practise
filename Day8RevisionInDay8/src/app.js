import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import authRoutes from "./src/routes/auth.routes.js";
import songRoutes from "./routes/song.routes.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("api/songs", songRoutes);

export default app;
