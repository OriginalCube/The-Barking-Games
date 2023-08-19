const ActivityModel = require("../models/ActivityModel");

const create = async (req, res) => {
  const { id, points, time } = req.body;
  const createActivity = await ActivityModel.create({
    item_id: id,
    points: points,
    time: time,
    user: req.user._id,
  });
  console.log(createActivity);
};

module.exports = { create };
