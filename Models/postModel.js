import mongoose from "mongoose";
import postSchema from "../Schemas/postSchema.js";

const Post = mongoose.model("Post", postSchema);

export default Post;
