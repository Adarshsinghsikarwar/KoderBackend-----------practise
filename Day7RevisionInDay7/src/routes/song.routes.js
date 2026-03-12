import express from "express";
import multer from "multer";
import { uploadFile } from "../services/strorage.service.js";

// const upload = multer({storage : multer.memoryStorage})
const upload = multer({ dist: "uploads/" });

const songRoutes = express.Router();

app.use("/", upload.single("song"), uploadFile);
