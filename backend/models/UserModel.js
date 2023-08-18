const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("bg-users", Schema);
