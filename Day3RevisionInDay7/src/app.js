import express from "express";
import noteModel from "./models/note.model.js";

const app = express();

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  await noteModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: "note created successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "note fetched successfully",
    notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;

  await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "user deleted successfully",
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
