const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  fetchData,
  deleteUser,
  updateUser,
  fetchSpecificData,
} = require("../controller/user");

userRouter.post("/api/createUser", createUser);
userRouter.get("/api/fetchData", fetchData);
userRouter.delete("/api/deleteUser", deleteUser);
userRouter.patch("/api/updateUser", updateUser);

userRouter.get("/api/fetchSpecificData", fetchSpecificData);

module.exports = userRouter;
