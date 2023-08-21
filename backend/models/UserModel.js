const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    username: String,
    password: String,
    profile: String,
    birthday: Date,
    email: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("bg-users", Schema);
