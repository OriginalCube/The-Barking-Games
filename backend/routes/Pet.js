const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/Auth");
const { add, retrieve } = require("../controllers/PetController");

router.post("/add", protect, add);

router.get("/retrieve", protect, retrieve);

module.exports = router;
