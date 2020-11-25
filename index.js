import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/blog", { useNewUrlParser: true });
const app = express();
const port = 3000;

import Author from "./Models/authorModel.js";
import Post from "./Models/postModel.js";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/authors", (req, res) => {
  (async () => {
    let author = await Author.find().populate("posts");
    res.status(200).send(author);
  })();
});

app.post("/post", (req, res) => {
  (async () => {
    let author = await Author.findById(req.body.authorID);
    const post = await Post.create({
      content: req.body.content,
      author: author._id,
    });
    res.status(201).send(post);
    author.posts.push(post._id);
    await author.save();
  })();
});

app.get("/posts", (req, res) => {
  (async () => {
    let posts = await Post.find().populate("author", "name");
    res.send(posts);
  })();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
