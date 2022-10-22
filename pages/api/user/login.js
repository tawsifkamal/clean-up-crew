import dbConnect from "../../../lib/dbConnect";
const User = require("../../../lib/models/User");

export default async function handler(req, res) {
  try {
    await dbConnect();

    const name = req.body.name;
    const userType = req.body.userType;

    const query = {
      name,
      userType,
    };

    const update = query;

    const options = {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    };

    const result = await User.findOneAndUpdate(query, update, options);

    // let user = await User.findOne({ name });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
