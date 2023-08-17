require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT,
  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Check connection.
const address = "/api/v1";

app.use(`${address}/user`, require("./routes/User"));

const mainServer = app.listen(PORT, () =>
  console.log(`listening on port : ${PORT}`),
);

// mainServer();
