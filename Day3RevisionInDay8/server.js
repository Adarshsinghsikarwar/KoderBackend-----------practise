import app from "./src/app.js";
import mongoose from "mongoose";

async function connectToDB() {
  await mongoose.connect(process.env.MONGO_URI);
}

connectToDB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
