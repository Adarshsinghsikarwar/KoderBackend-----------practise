import express from "express";

const app = express();
app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  const note = req.body;
  notes.push(note);

  res.status(201).json({
    message: "note created successfully",
  });
});

app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});
