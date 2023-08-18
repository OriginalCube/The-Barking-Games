const express = require("express");

const router = express.Router();
const { protect } = require("../middlewares/Auth");
const { register, login, info } = require("../controllers/UserController");

router.post("/register", register);

router.post("/login", login);

router.get("/info", protect, info);

module.exports = router;
