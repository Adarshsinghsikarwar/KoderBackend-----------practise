import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  title: String,
  content: String,
});

const noteModel = mongoose.model("notes", noteSchema);

export default noteModel;
