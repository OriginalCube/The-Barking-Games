const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    item_id: Number,
    points: Number,
    time: Number,
    user: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true },
);

module.exports = mongoose.model("bg-activity", Schema);
