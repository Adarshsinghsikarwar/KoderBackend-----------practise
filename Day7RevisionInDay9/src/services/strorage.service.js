import { ImageKit, toFile } from "@imagekit/nodejs";
import { config } from "../config/config.js";
import { randomUUID } from "crypto";

const imageKit = new ImageKit({
  publicKey: config.IMAGEKIT_PUBLIC_KEY,
  privateKey: config.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: config.IMAGEKIT_URL_ENDPOINT,
});

const uploadFile = async (file, originalFile) => {
  try {
    const result = await imageKit.files.upload({
      file: await toFile(file.buffer, originalFile),
      fileName: randomUUID(),
    });
    return result;
  } catch (err) {
    console.log("server is running on port 3000");
  }
};

export default uploadFile;
