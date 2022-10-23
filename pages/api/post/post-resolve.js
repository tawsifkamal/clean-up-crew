import dbConnect from "../../../lib/dbConnect";
const Post = require("../../../lib/models/Post");
const User = require("../../../lib/models/User");

export default async function handler(req, res) {
  try {
    await dbConnect();
    console.log(req.body)
    const { postId, imageUrl, description } = req.body;
    const post = await Post.findById(postId);
    if (post.postState == 'pending') {
      // post.imageURL = imageURL // trying to keep original for now bruh
      post.description = description
      post.postSolution = {
        solutionPicture: imageUrl,
        description: description
      }
      // post.postSolution.solutionPicture = imageUrl
      // post.postSolution.description = description
      post.postState = 'resolved';
    }
    await post.save();
  } catch (err) {
    console.log(err);
  }
}
