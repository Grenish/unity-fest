import express from "express";
import { json } from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 3001;

app.use(json());
app.use(cors()); // Enable CORS

app.get("/api/comments", (req, res) => {
  const comments = require("./comments.json");
  res.json(comments);
});

app.post("/api/comments", (req, res) => {
  const newComment = req.body;
  const comments = require("./comments.json");
  comments.push(newComment);
  fs.writeFileSync("./comments.json", JSON.stringify(comments));
  res.json(newComment);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
