
const express=require("express");
const orderRouter=express.Router();

const {
    
    getOrder,
    addOrder,
}=require("../controllers/orderController");

userRouter.get("/",getOrder);
userRouter.post("/",addOrder);
module.exports=orderRouter;


