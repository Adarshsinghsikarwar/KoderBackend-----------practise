import mongoose from "mongoose";
import moongose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const userModel = mongoose.model("notes", noteSchema);

export default userModel;
