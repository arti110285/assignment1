const User=require("../models/usermodel")

const login=(User)=>async (req,res)=>{
    try{
        const {phone, password}=req.body;
        const user=await User.findOne({phone:phone});
        if(!user)
        {
            res.status(400).json({
                message:"user not found",
            })
        }
        else{
            if(user.password===password)
            {
        
                res.json({
                    message:"login successful",
                    data:user,
                })
            }
            else{
                res.json({
                    message:"inalid user.",

                })
            }
        }
    }catch(err)
    {
        console.log(err);
    }
}


module.exports={login}
