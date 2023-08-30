const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/Auth");
const { add } = require("../controllers/PetController");

router.post("/add", protect, add);

module.exports = router;
