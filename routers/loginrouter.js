const express=require("express");
const loginrouter=express.Router();

const {
    login
}=require("../controllers/login");

loginrouter.post("/",login);
module.exports=loginrouter;