const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    if (con) {
      console.log("Mongodb Connected...");
    } else {
      console.log("Error connecting to Mongodb...");
    }
  } catch (err) {
    console.log("Error connecting to Mongodb...");
  }
};

module.exports = connectDb;
