const express=require('express');
const app=express();
const port=5500;
require('./config/database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRouter=require('./router/user')

app.use([userRouter])

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})