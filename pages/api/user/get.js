const dbConnect = require("../../../lib/dbConnect");
const User = require("../../../lib/models/User");

export default async function handler(req, res) {
  try {
    await dbConnect();

    const users = await User.find({});
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
