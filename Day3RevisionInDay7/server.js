import app from "./src/app.js";
import mongoose from "mongoose";

async function connectToDB() {
  try {
    await mongoose.connect("");
  } catch (error) {
    console.log(error.message);
  }
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
