
const express=require("express");
const userRouter=express.Router();

const {
    
    getUser,
    addUser,
}=require("../controllers/userController");

userRouter.get("/",getUser);
userRouter.post("/",addUser);
module.exports=userRouter;

