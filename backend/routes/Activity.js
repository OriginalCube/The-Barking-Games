const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/Auth");
const { create } = require("../controllers/ActivityController");

router.post("/create", protect, create);

module.exports = router;
