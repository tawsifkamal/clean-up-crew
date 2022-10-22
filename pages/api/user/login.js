export default async function handler(req, res) {
  try {
    await dbConnect();

    const name = req.body.name;
    let user = await User.findOne({ name });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
}
