import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: String,
});

export default authorSchema;
