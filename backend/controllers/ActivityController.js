const ActivityModel = require("../models/ActivityModel");

const create = async (req, res) => {
  const { id, points, time } = req.body;
  try {
    const createActivity = await ActivityModel.create({
      item_id: id,
      points: points,
      time: time,
      user: req.user._id,
    });

    if (!createActivity) {
      res.status(400).json({ message: "Error in creating activity" });
    } else {
      res.status(201).json(createActivity);
    }
  } catch (err) {
    res.status(400).json({ message: "Error retrieving data." });
  }
};

const collect = async (req, res) => {
  try {
    const onCollect = await ActivityModel.find({ user: req.user._id });
    if (!onCollect) {
      res.status(400).json({ message: "No activities done." });
    } else {
      res.status(200).json(onCollect);
    }
  } catch (err) {
    res.status(400).json({ message: "Error retrieving data." });
  }
};

module.exports = { create, collect };
