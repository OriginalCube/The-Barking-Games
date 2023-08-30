require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT,
  app = express();
const connectDb = require("./configs/mongo");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Check connection.
const address = "/api/v1";

connectDb();

app.use(`${address}/user`, require("./routes/User"));
app.use(`${address}/activity`, require("./routes/Activity"));
app.use(`${address}/pet`, require("./routes/Pet"));

const mainServer = app.listen(PORT, () =>
  console.log(`listening on port : ${PORT}`),
);
