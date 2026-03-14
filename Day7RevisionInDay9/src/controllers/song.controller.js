import uploadFile from "../services/strorage.service.js";

async function uploadSong(req, res) {
  const result = uploadFile(req.file, req.originalname);

  res.status(201).json({
    message: "song created sucessfully",
  });
}
