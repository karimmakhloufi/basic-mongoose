import mongoose from "mongoose";
import authorSchema from "../Schemas/authorSchema.js";

const Author = mongoose.model("Author", authorSchema);

export default Author;
