import dbConnect from "../../lib/dbConnect";

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).send("database works!");
  } catch (err) {
    console.log(err);
  }
}
