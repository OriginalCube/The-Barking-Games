const register = (req, res) => {
  return req.body;
};

const login = (req, res) => {
  console.log("recieved");
  res.json(req.body);
};

module.exports = { register, login };
