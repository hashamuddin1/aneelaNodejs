const { User } = require("../model/user");
const { ObjectId } = require("mongodb");

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
const deleteUser = async (req, res) => {
  try {
    const delUser = await User.deleteOne({
      _id: new ObjectId(req.query.userId),
    });

    return res.send({ message: "User has been deleted" });
  } catch (e) {
    console.log(e);
  }
};

const updateUser = async (req, res) => {
  try {
    const updateUser = await User.findOneAndUpdate(
      { _id: new ObjectId(req.query.userId) }, //kisko update krna hy
      req.body, //kia update krna hy
      { new: true } //
    );
    return res.send({ message: "User has been updated", data: updateUser });
  } catch (e) {
    console.log(e);
  }
};

const fetchSpecificData = async (req, res) => {
  try {
    const fetchData = await User.find({ firstName: req.body.firstName });
    return res.send({ message: "User fetch", data: fetchData });
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
};
module.exports = { createUser, fetchData, deleteUser, updateUser,fetchSpecificData };
