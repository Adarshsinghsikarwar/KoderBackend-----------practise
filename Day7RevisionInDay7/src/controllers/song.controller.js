import { uploadFile } from "../services/strorage.service.js";

export async function songUpload(req, res) {
  const result = await uploadFile(req.file);
}
