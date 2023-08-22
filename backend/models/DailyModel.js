const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    user: mongoose.Schema.Types.ObjectId,
    item_id: [Number],
  },
  { timestamps: true },
);

module.exports = mongoose.model("bg-daily", Schema);
