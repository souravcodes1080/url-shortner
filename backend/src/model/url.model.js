import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
  longUrl: {
    type: String,
  },
  code: {
    type: String,
  },
});

const Url = mongoose.model("Url", urlSchema);

export { Url };
