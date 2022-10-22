import dbConnect from "../../../lib/dbConnect";
const Post = require("../../../lib/models/Post");
import getLocation from "../../../lib/hooks/useGeoLocation";

export default async function handler(req, res) {
  try {
    await dbConnect();

    const body = {
      name: req.body.name,
      totalContributed: req.body.totalContributed,
      contributors: req.body.contributors,
      contractor: req.body.contractor,
      score: req.body.score,
      description: req.body.description,
      location: req.body.location,
      imageUrl: req.body.imageUrl,
      postState: req.body.postState,
      postSolution: req.body.postSolution,
    };

    const post = new Post(body);
    const createdPost = await Post.create(post);
    res.status(201).json(createdPost);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
