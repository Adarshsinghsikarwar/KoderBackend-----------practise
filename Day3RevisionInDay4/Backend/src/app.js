import express from "express";
import userModel from "./models/note.model";

const app = express();

app.use(express.json());

app.post("/notes", (req, res) => {
  const { title, description } = req.body;

  const note = await userModel.create({
    title, description
  })
});
