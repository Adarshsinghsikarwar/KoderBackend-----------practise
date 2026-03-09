import express from "express";

const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  const note = req.body;
  notes.push(note);

  res.status(201).json({
    message: "Note created successfully",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes,
    message: "Note fetched successfully",
  });
});

app.delete("notes/:index", (req, res) => {
  const { index } = req.params;

  delete notes[index];

  res.status(200).json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:index", (req, res) => {
  const { index } = req.params;
  const { description } = req.body;

  notes[index].description = description;
  res.status(200).json({
    message: "Note updated successfully",
  });
});
