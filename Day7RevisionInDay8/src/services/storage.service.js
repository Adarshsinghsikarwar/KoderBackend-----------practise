import { ImageKit, toFile } from "@imagekit/nodejs";
import { config } from "../config/config.js";
import { randomUUID } from "crypto";
import fs from "fs";
const imagekit = new ImageKit({
  publicKey: config.IMAGEKIT_PUBLIC_KEY,
  privateKey: config.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: config.IMAGEKIT_URL_ENDPOINT,
});

export async function uploadFile(file) {
  try {
    const result = await imagekit.files.upload({
      file: await toFile(file.buffer, file.originalname),
      // file: fs.createReadStream(file.path),
      fileName: randomUUID(),
    });
    return result;
  } catch (error) {
    console.log("error", error);
  }
}
