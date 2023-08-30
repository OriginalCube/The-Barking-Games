const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/Auth");
const {
  create,
  collect,
  add,
  daily,
  remove,
} = require("../controllers/ActivityController");

router.post("/create", protect, create);

router.get("/collect", protect, collect);

router.get("/add/:id", protect, add);

router.get("/remove/:id", protect, remove);

router.get("/daily", protect, daily);

module.exports = router;
