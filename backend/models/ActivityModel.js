const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    item_id: Number,
    title: String,
    description: String,
    time: Number,
    min: Number,
    max: Number,
  },
  { timestamps: true },
);

module.exports = mongoose.Model("bg-activity", Schema);
