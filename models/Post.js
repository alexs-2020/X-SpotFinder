const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const postSchema = new Schema(
  {
    name: String,
    url: String,
    description: String,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
