import express from "express";
import userModel from "./modals/note.model.js";

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;

  await userModel.create({ title, content });

  res.status(201).json({
    message: "Note created successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await userModel.find();
  res.status(200).json({
    message: "Note fetched successfully",
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
  const { content } = req.body;
  await userModel.findByIdUpdate(id, { content });

  res.status(200).json({
    message: "Note updated successfully",
  });
});

export default app;
