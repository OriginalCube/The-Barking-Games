const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/Auth");
const { create, collect } = require("../controllers/ActivityController");

router.post("/create", protect, create);

router.get("/collect", protect, collect);

module.exports = router;
