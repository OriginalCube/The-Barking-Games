const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: String,
  birthdate: Date,
  breed: String,
  owner: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("bg-pets", Schema);
