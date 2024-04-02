
const Order=require("../models/ordermodel")

const {
    getAllFactory,
    createFactory,
    getElementByIdFactory
}=require("../utils/crudFactory");

const addOrder=createFactory(Order);
const getOrder=(Order)=>async (req,res)=>{
    try{
        const {userid}=req.params;
        const order= Order.find({user_id:userid});
        if(!order)
        {
            res.status(400).json({
                message:"order not found",
            })
        }
        else{
                res.json({
                    message:"order list.",
                    data:order

                })
            }
        
    }catch(err)
    {
        console.log(err);
    }
}




module.exports={ getOrder,
    addOrder
}