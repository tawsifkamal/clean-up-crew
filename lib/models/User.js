import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  userType: {
    type: String, // user | contractor
  },
  currentLocation: {
    type: {
      longitude: String,
      latitude: String,
      readableAddress: String,
    },
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
