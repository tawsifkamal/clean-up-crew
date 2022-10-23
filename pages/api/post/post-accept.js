import { Router } from "next/router";
import dbConnect from "../../../lib/dbConnect";
const Post = require("../../../lib/models/Post");
const User = require("../../../lib/models/User");

export default async function handler(req, res) {
    try {
        if (req.method !== 'PUT') {
            res.status(405).json({message: "please use PUT"})
        } else {
            await dbConnect();
            const {userId, postId} = req.body;
            const post = await Post.findById(postId);
            if (post.postState == 'open') {
                post.contractor = userId;
                post.postState = 'pending'
            }
            await post.save();
            
        }
    } catch (err) {
        console.log(err)
    }
}