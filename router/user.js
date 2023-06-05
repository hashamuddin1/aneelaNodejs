const express=require('express');
const userRouter=express.Router();
const {createUser}=require('../controller/user')

userRouter.get('/api/demo',createUser)

module.exports=userRouter