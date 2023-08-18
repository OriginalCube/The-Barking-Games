const UserModel = require("../models/UserModel");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const userExist = UserModel.findOne({ username });

  if (!userExist) {
    res.status(400).json({ message: "Error Recieved..." });
  } else {
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    const createUser = await UserModel.create({
      username,
      password: hashedPassword,
      email,
    });

    if (createUser) {
      res.status(201).json({ message: "Account creation successful..." });
    } else {
      res.status(400).json({ message: "Account creation failed..." });
    }
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const userExist = await UserModel.findOne({ username });
  if (!userExist) {
    res.json({ message: "Account does not exist." });
  } else if (
    userExist &&
    (await bycrypt.compare(password, userExist.password))
  ) {
    res
      .status(200)
      .json({ message: "Logged in", token: genJWT(userExist._id) });
  } else {
    res.status(400).json({ message: "Invalid credentials." });
  }
};

const genJWT = (id) => {
  return jwt.sign({ id }, process.env.BARKING_SECRETS, { expiresIn: "30d" });
};

module.exports = { register, login };