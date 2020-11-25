import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

export default authorSchema;
