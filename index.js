import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

mongoose.connect("mongodb://localhost/blog", { useNewUrlParser: true });
const app = express();
const port = 3000;

import Author from "./Models/authorModel.js";
import Post from "./Models/postModel.js";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/authors", (req, res) => {
  (async () => {
    let authors = await Author.find();
    res.send(authors);
  })();
});

app.post("/post", (req, res) => {
  console.log(req.body);
  (async () => {
    const newPost = new Post({
      content: "this is a post content",
      author: "5fbd0f1ab5b6f4585f9c22d3",
    });
    await newPost.save();
  })();
});

app.get("/posts", (req, res) => {
  (async () => {
    await Post.findOne()
      .populate("author")
      .exec(function (err, post) {
        res.send(post);
      });
  })();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
