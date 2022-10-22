import mongoose from "mongoose";
const UserSchema = require("./User").schema;

/**
 * Currently score and totalContribute are optional
 */
const PostSchema = mongoose.Schema({
  name: {
    type: String,
  },
  totalContributed: {
    type: Number,
    default: 0,
  },
  contributors: {
    type: [UserSchema],
  },
  score: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  location: {
    type: {
      longitude: String,
      latitude: String,
    },
  },
  imageUrl: {
    type: String,
  },
  postState: {
    type: String, // open | pending | resolved
  },
  postSolution: {
    type: {
      solutionPicture: String, // imageUrl
      description: String,
    },
  },
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
