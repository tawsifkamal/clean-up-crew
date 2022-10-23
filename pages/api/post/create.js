import dbConnect from "../../../lib/dbConnect";
const Post = require("../../../lib/models/Post");

export default async function handler(req, res) {
    try {
        await dbConnect();
        const body = {}
        // provided
        body.name = req.body.name;
        body.description = req.body.description;
        body.fileUrl = req.body.fileUrl
        body.location = req.body.location;
        // default
        body.totalContributed = 0;
        //body.contributors = [];
        body.contractor = "";
        body.postState = "open"
        body.postSolution = {}
        body.score = 0;
        console.log("backend"+body);
        const createdPost = await Post.create(body);
        console.log(createdPost);
        res.status(201).json(createdPost);
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Internal server error :(" })
    }
}