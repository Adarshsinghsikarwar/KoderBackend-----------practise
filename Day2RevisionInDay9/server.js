import express from "express";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const notes = [];

app.post("/notes", (req, res) => {
  const note = req.body;

  notes.push(note);

  res.status(201).json({
    message: "note created successfully",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "note fetched successfully",
    notes,
  });
});

app.delete("/notes/:index", (req, res) => {
  const { index } = req.params;

  delete notes[index];

  res.status(200).json({
    message: "note created successfully",
  });
});

app.path("/notes/:index", (req, res) => {
  const { index } = req.params;
  const { description } = req.body;

  notes[index].description = description;
  res.status(200).json({
    message: "note updated successfully",
  });
});

app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});
