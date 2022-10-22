import dbConnect from "../../../lib/dbConnect";
const User = require("../../../lib/models/User");

export default async function handler(req, res) {
  try {
    await dbConnect();

    const name = req.body.name;
    const userType = req.body.userType;

    const user = new User({ name, userType });
    const createdUser = await User.create(user);
    res.status(200).json(createdUser);
  } catch (err) {
    console.log(err);
  }
}
