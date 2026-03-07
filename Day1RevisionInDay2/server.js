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

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
