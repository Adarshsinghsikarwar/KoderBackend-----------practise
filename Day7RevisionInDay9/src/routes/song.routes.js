import express from "express";
import multer from "multer";

const upload = multer({ storage: memoryStorage() });
const songRoutes = express.Router();

songRoutes.post("/", upload.single("song"), uplaodSong);

export default songRoutes;
