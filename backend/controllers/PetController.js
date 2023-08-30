const UserModel = require("../models/UserModel");
const PetModel = require("../models/PetModel");

const add = async (req, res) => {
  const { name, birthdate, breed } = req.body;
  const userExist = await UserModel.findById(req.user._id);
  if (!userExist) {
    res.status(400).json({ message: "User does not exist!" });
  }

  const fileExist = await PetModel.findOne({
    owner: req.user_id,
    name: name,
    breed: breed,
  });
  if (fileExist) {
    //File already exist
    res
      .status(200)
      .json({ message: "Pet already exist with the same name and breed" });
  } else {
    const createFile = await PetModel.create({
      name: name,
      birthdate: birthdate,
      breed: breed,
      owner: req.user_id,
    });
    if (createFile) {
      res.status(201).json(createFile);
    } else {
      res.status(400).json({ message: "Error in creating file for pet" });
    }
  }
};

module.exports = { add };
