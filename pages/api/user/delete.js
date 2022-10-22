import dbConnect from "../../../lib/dbConnect";
const User = require("../../../lib/models/User");

export default async function handler(req, res) {
  try {
    await dbConnect();

    const deletedUser = await User.deleteOne({});
    res.status(200).json(deletedUser);
  } catch (err) {
    console.log(err);
  }
}
