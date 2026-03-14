import express from "express";

const app = express();
app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  const note = req.body;
  notes.push(note);

  req.status(201).json({
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
    message: "note deleted successfully",
  });
});

app.patch("/notes/:index", (req, res) => {
  const { index } = req.params;
  const { title, content } = req.body;

  notes[index].content = content;

  res.status(200).json({
    message: "note updated successfully",
  });
});

app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});
