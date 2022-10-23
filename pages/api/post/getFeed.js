import dbConnect from "../../../lib/dbConnect";
import { RelevanceAlgo } from "../../../lib/scoringAlgo";
const Post = require("../../../lib/models/Post");
const User = require("../../../lib/models/User");

export default async function handler(req, res) {
  try {
    await dbConnect();
    const user = await User.findById(req.query.userId);

    const posts = await Post.find({});
    newPosts = posts.map((post) => {
        const newPost = {};
        newPost.name = post.name;
        newPost.contractor = post.contractor;
        newPost.totalContributed = post.totalContributed;
        newPost.score = post.score + RelevanceAlgo(user.location, post.location);
        newPost.description = post.description;
        newPost.readableAddress = post.location.readableAddress;
        newPost.imageUrl = post.imageUrl;
        newPost.postState = post.postState;
        newPost.postSolution = post.postSolution;
        newPost.liked = post.likesArray.some(like => like.userId === user.id)
        return newPost;
    })
    res.status(200).json(newPosts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
