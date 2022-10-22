import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  userType: {
    type: String, // user | contractor
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
