import express from "express";
import userModel from "./models/note.model.js";

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

  await userModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: "note created successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await userModel.find();

  res.status.json({
    notes,
    message: "note fetched successfully",
  });
});

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;

  await userModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "note created successfully",
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

export default app;
