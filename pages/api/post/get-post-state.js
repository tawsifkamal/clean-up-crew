import dbConnect from "../../../lib/dbConnect";
const Post = require("../../../lib/models/Post");

export default async function handler(req, res) {
  try {
    await dbConnect();
    const { postId } = req.query;
    const post = await Post.findById(postId);
    res.status(200).send(post.postState);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
