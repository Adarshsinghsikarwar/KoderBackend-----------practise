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
    message: "note fetched successfully",
  });
});

app.delete("/notes/:index", (req, res) => {
  const { index } = req.params;
  delete notes[index];

  res.status(200).json({
    message: "Note deleted successfully",
  });
});

app.patch("/note/:index", (req, res) => {
  const { index } = req.params;
  notes[index].content = content;

  res.status(200).json({
    message: "Note updated successfully",
  });
});

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
