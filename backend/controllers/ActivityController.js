const ActivityModel = require("../models/ActivityModel");
const DailyModel = require("../models/DailyModel");

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
  const currentDate = new Date();
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0,
  );
  const lastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );

  try {
    const onCollect = await ActivityModel.find({
      user: req.user._id,
      createdAt: { $gte: firstDay, $lte: lastDay },
    });
    if (!onCollect) {
      res.status(400).json({ message: "No activities done." });
    } else {
      res.status(200).json(onCollect);
    }
  } catch (err) {
    res.status(400).json({ message: "Error retrieving data." });
  }
};

const add = async (req, res) => {
  const { id } = req.params;
  try {
    //Find if user exist in collection
    const userExist = await DailyModel.findOne({ user: req.user._id });
    if (!userExist) {
      const addActivity = await DailyModel.create({
        user: req.user._id,
        item_id: [id],
      });
      if (addActivity) {
        res.status(201).json(addActivity);
      }
    } else {
      const addActivity = await DailyModel.findOneAndUpdate(
        { user: req.user._id },
        { $addToSet: { item_id: id } },
      );
      if (addActivity) {
        const updatedActivity = await DailyModel.findOne({
          user: req.user._id,
        });
        res.status(200).json(updatedActivity);
      } else {
        res.status(400).json({ message: "Error updating files." });
      }
    }
  } catch (err) {
    res.status(400).json({ message: "Error updating data." });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const userExist = await DailyModel.findOne({ user: req.user._id });
    if (!userExist) {
      res.stats(400).json({
        message: "You don't have an account or account does not exist!",
      });
    } else {
      const removeActivity = await DailyModel.findOneAndUpdate(
        { user: req.user._id },
        { $pull: { item_id: id } },
      );
      if (removeActivity) {
        const updatedActivity = await DailyModel.findOne({
          user: req.user._id,
        });
        res.status(200).json(updatedActivity);
      } else {
        res.status(400).json({ message: "Error in resolving problem." });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const daily = async (req, res) => {
  try {
    const exist = await DailyModel.findOne({ user: req.user._id });
    if (exist) {
      res.status(201).json(exist);
    } else {
      res.status(200).json({ message: "Does not have any daily" });
    }
  } catch (err) {}
};

module.exports = { create, collect, add, daily, remove };
