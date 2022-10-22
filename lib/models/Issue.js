import mongoose from "mongoose";

const IssueSchema = mongoose.Schema({
  name: {
    type: String,
  },
  userType: {
    type: Number, // 0 = user, 1 = contractor
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
