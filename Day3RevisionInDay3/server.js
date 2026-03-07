import app from "./src/app.js";
import mongoose from "mongoose";

async function connectToDB() {
  await mongoose.connect("");

  console.log("Connect to db");
}
connectToDB();

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
