const { User } = require("../model/user");

const createUser = async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  const data = await newUser.save();

  return res.send({ message: "User has been created", data: data });
};

const fetchData = async (req, res) => {
  const data = await User.find();

  return res.send({ message: "All Users", data: data });
};

module.exports = { createUser,fetchData };
