import dbConnect from "../../../lib/dbConnect";
const Post = require("../../../lib/models/Post");

export default async function handler(req, res) {
    try {
        await dbConnect();
        const post = {}
        // provided
        post.name = req.body.name;
        post.description = req.body.description;
        post.fileUrl = req.body.fileUrl
        post.location = req.body.location;
        // default
        post.totalContributed = 0;
        post.contributors = [];
        post.contractor = "";
        post.postState = "open"
        post.postSolution = {}
        post.score = 0;
        
        const createdPost = await Post.create(post)
        res.status(201).json(createdPost);
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Internal server error :(" })
    }
}