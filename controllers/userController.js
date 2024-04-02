
const User=require("../models/usermodel")

const {
    getAllFactory,
    createFactory
}=require("../utils/crudFactory");

const addUser=createFactory(User);
const getUser=getAllFactory(User);



module.exports={ getUser,
    addUser
}