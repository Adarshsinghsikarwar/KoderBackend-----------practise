import express from "express";

const app = express();

app.use(express.json());
const notes = [];

app.get("/notes", (req, res) => {
  const note = req.body;
  notes.push(note);
  res.status(201).json({
    message: "Note created successsfully",
  });
});
