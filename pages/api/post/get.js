import dbConnect from "../../../lib/dbConnect";
const Post = require("../../../lib/models/Post");

export default async function handler(req, res) {
  try {
    await dbConnect();

    const posts = await Post.find({});
    console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
