import { uploadFile } from "../services/storage.service.js";

export async function uploadSong(req, res) {
  const result = uploadFile(req.file);
  res.status(201).json({
    message: "song created successfully",
  });
}
