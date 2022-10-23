import dbConnect from "../../../lib/dbConnect";
const Post = require("../../../lib/models/Post");

export default async function handler(req, res) {
  try {
    await dbConnect();
    const post = {};
    // provided
    post.name = req.body.name;
    post.description = req.body.description;
    post.imageUrl = req.body.imageUrl;
    post.location = req.body.location;
    const createdPost = await Post.create(post);
    res.status(201).json(createdPost);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error :(" });
  }
}
