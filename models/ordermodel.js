
const mongoose=require("mongoose")

const orderschema=new mongoose.Schema({
    user_id:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        
    },
    sub_total:{
        type:Number,
        required:true,
    
    },
    
})

const Order=mongoose.model("order", orderschema)
module.exports=Order
