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
  likesCount: {
    type: Number,
    default: 0,
  },
  likesArray: {
    type: [
      {
        userId: String,
        userLocation: {
          longitude: String,
          latitude: String,
          readableAddress: String,
        },
      },
    ],
    default: [],
  },
  contributors: {
    type: [
      {
        userId: String,
        amount: Number,
      },
    ],
    default: [],
  },
  contractor: String,
  score: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  location: {
    type: {
      readableAddress: String,
      longitude: String,
      latitude: String,
    },
  },
  imageUrl: {
    type: String,
  },
  postState: {
    type: String, // open | pending | resolved
    default: "open",
  },
  postSolution: {
    type: {
      solutionPicture: String, // imageUrl
      description: String,
    },
  },
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
