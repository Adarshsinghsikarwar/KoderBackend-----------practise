import morgan from "morgan";
import noteModel from "./models/note.model.js";
import express from "express";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

  await noteModel.create({ title, description });
  res.status(201).json({
    message: "note created successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = noteModel.find();

  res.status(200).json({
    message: "note fetched successfully",
  });
});

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;

  await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  await noteModel.findByIdAndUpdate(id, { title, description });

  res.status(200).json({
    message: "note updated successfully",
  });
});

export default app;
