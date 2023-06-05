const express=require('express');
const app=express();
const port=5500;
const userRouter=require('./router/user')

app.use([userRouter])

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})