const express=require('express');
const userRouter=express.Router();
const {createUser,fetchData}=require('../controller/user')

userRouter.post('/api/createUser',createUser)
userRouter.get('/api/fetchData',fetchData)

module.exports=userRouter