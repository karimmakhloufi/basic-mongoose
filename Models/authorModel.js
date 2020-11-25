import mongoose from "mongoose";
import authorSchema from "../Schemas/authorSchema.js";

const AuthorModel = mongoose.model("Author", authorSchema);

export default AuthorModel;
