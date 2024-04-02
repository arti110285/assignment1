const express=require("express");
const mongoose=require("mongoose");

const User=require("./models/usermodel")

const userRouter = require("./routers/userRouter");
const loginrouter = require("./routers/loginrouter");

const app=express();

app.use(express.json());
require("dotenv").config();
const PORT=process.env.PORT;
mongoose.connect(process.env.db_url).then((connection)=>
{
    console.log("db connected")
})
// console.log("hello");
// app.use(function(req,res){
//     res.status(200).send("hello world")
// })

app.use("api/user1",loginrouter);
app.use("/api/user1",userRouter);
app.use("/api/order",orderRouter);
app.listen(PORT,()=>{
    console.log("server is running on ",PORT);
});

// app.use((err,req,res,next) =>{
//     const statuscode=err.status||500;
//     const messag=err.message||"Internal error";
//     res.status(statuscode).json({
//         status:statuscode,
//         message:messag,
//     })
//  })

// app.use(function(req,res){
//     res.status(404).send("not found")
// })