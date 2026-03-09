import app from "./src/app.js";
import mongoose, { mongo } from "mongoose";

async function connectToDB() {
  await mongoose.connect("mongoURi");
}

connectToDB();

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
