import express from "express";

const songRoute = express.Router();

songRoute.post("/", uploadSong);
