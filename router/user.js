const express=require('express');
const userRouter=express.Router();
const {createUser,fetchData,deleteUser,updateUser}=require('../controller/user')

userRouter.post('/api/createUser',createUser)
userRouter.get('/api/fetchData',fetchData)
userRouter.delete('/api/deleteUser',deleteUser)
userRouter.patch('/api/updateUser',updateUser)

module.exports=userRouter