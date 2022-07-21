const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const postSchema = new Schema(
  {
    img: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    decription: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
