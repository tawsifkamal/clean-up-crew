import dbConnect from "../../../lib/dbConnect";
const Post = require("../../../lib/models/Post");
const User = require("../../../lib/models/User");

export default async function handler(req, res) {
    if (req.method !== "PUT") {
        res.status(400).json({ message: "Use PUT method chap"});
        return;
    }
    try {
        await dbConnect();
        const { postId, userId, amount } = req.body;
        const user = await User.findById(userId);
        const post = await Post.findById(postId);
        console.log(`postId: ${postId}`)                    
        console.log(post)            
        post.totalContributed += amount;
        post.contributors.push({user: user, amount: amount})
        await post.save()
        res.status(200).json({ message: "Successfully contributed to issue"})
        
    } catch (e) {
        res.status(500).json({ message: "Internal server error :("})
        console.log(e);
    }
}