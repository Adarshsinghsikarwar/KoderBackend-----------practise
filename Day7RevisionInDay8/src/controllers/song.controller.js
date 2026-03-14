import { uploadFile } from "../services/storage.service.js";

export async function uplaodSong(req, res) {
  const result = await uploadFile(req.file);

  res.status(201).json({
    message: "file created successfully",
    result,
  });
}
