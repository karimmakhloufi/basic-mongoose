import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});

export default postSchema;
