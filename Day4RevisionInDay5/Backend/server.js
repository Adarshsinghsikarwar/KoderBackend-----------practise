import app from "./src/app.js";
import mongoose from "mongoose";

async function connectToDB() {
  await mongoose.connect("");
}

connectToDB();

app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});
