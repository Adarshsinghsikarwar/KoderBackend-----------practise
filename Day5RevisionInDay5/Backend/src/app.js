import express from "express";
import authRoutes from "./routes/auth.route";
// import "cookie-parser" from "cookie-parser"
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

export default app;
