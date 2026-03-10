import express from "express";
import userModel from "./models/note.model";

const app = express();

app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

  const note = await userModel.create({
    title,
    description,
  });
});

app.get("/notes", async (req, res) => {
  const notes = await userModel.find();

  res.status(200).json({
    message: "notes fetched successfully",
    notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;

  await userModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  await userModel.findByIdAndUpdate(id, { title, description });

  res.status(200).json({
    message: "note updated successfully",
  });
});
