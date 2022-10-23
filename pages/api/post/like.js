import dbConnect from "../../../lib/dbConnect";
const Post = require("../../../lib/models/Post");

export default async function handler(req, res) {
  try {
    await dbConnect();

    const userId = req.body.userId;
    const postId = req.body.postId;
    const likesCount = req.body.likesCount;
    const userLocation = req.body.userLocation;

    const likesArrayObject = { userId, userLocation };

    const update = {
      likesCount,
      $push: {
        likesArray: likesArrayObject,
      },
    };

    const options = {
      returnDocument: "after",
    };

    const updatedPost = await Post.findByIdAndUpdate(postId, update, options);
    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
