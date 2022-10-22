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

// export const loginUser = async (name, privateKey) => {
//   let user = await User.findOne({ name, privateKey });
//   if (!user) {
//     return null;
//   } else {
//     return user;
//   }
// };

// export const getAllUsers = async () => {
//   return User.find({});
// };

// export const getAllUsersBalance = async () => {
//   const tawsifCoin = await getBlockchain();
//   const usersArray = await getAllUsers();

//   return usersArray.map((user) => {
//     const balance = tawsifCoin.getBalance(user.publicKey);
//     return { name: user.name, publicKey: user.publicKey, balance: balance };
//   });
// };

// export const deleteUser = async () => {
//   return User.deleteOne({});
// };
