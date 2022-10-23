import dbConnect from "../../../lib/dbConnect";
const Post = require("../../../lib/models/Post");
const User = require("../../../lib/models/User");

export default async function handler(req, res) {
  try {
    await dbConnect();
    const { userId, postId, imageURL, description } = req.body;
    const user = await User.findById(userId);
    const post = await Post.findById(postId);
    if (post.postState == 'pending') {
      post.postSolution.solutionPicture = imageURL
      post.postSolution.description = description
      post.postState = 'resolved';
    }
    await post.save();
  } catch (err) {
    console.log(err);
  }
}
