
const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    
})

const User=mongoose.model("user1", userschema)
module.exports=User
