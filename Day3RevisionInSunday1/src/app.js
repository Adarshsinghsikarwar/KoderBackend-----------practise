import express from "express";
import userModel from "./models/note.model.js";

const app = express();

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;

  await userModel.create({
    title,
    content,
  });

  res.status(201).json({
    message: "Note created successfully",
  });
});

app.g