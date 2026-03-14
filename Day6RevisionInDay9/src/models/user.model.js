import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("users", userModel);

export default userModel;
