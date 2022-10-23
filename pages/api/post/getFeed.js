import dbConnect from "../../../lib/dbConnect";
import { RelevanceAlgo } from "../../../lib/scoringAlgo";
const Post = require("../../../lib/models/Post");
const User = require("../../../lib/models/User");

export default async function handler(req, res) {
  try {
    await dbConnect();
    const user = await User.findById(req.query.userId);

    const posts = await Post.find({}).lean();
    const newPosts = posts.map((post) => {
        const newPost = {...post}
        newPost.liked = post.likesArray.some(like => like.userId === user.id);
        newPost.score = post.score + RelevanceAlgo(user.currentLocation, post.location);
        return newPost;
    });
    res.status(200).json(newPosts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
