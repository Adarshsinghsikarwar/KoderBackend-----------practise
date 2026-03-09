import express from "express";

const app = express();

app.use(express.json());

const notes = [];
app.post("/notes", (req, res) => {
  const note = req.body;
  notes.push(note);

  res.status(201).json({
    message: "Note created successfuly",
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
  req.status(200).json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:index", (req, res) => {
  const { index } = req.params;
  const content = req.body;

  notes[index].content = content;

  res.status(200).json({
    message: "Updated successfully",
  });
});

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
