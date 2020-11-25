import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/blog", { useNewUrlParser: true });
const app = express();
const port = 3000;

import AuthorModel from "./Models/authorModel.js";

app.get("/authors", (req, res) => {
  (async () => {
    let authors = await AuthorModel.find();
    res.send(authors);
  })();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
