import express from "express";
import { uploadSong } from "../controllers/song.controllers.js";
import multer, { memoryStorage } from "multer";

const upload = multer({ storage: memoryStorage() });

const songRoutes = express.Router();

songRoutes.post("/", upload.single("song"), uploadSong);

export default songRoutes;
