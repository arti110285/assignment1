
const getAllFactory=(elementModel)=>async(req,res,next)=>{
    console.log("get all factory", elementModel)
    try{
        const data=await elementModel.find();
        if(data.length===0)
        {
            throw new Error("data not found");
        }
        else{
            res.status(200).json({
                message:"data found",
                data:data
            })
        }

    }
    catch(err)
    {
        next(err);
    }
}

const createFactory=(elementModel)=>async(req,res,next)=>{
    try{
        console.log("before");
        const elementDetails=req.body;
        console.log("data gotted");
        const data=await elementModel.create(elementDetails);
        res.status(200).json({
            message:"data created",
            data:data
        })
    }
    catch(err){
            next(err);
        
    }
}

const getElementByIdFactory=(elementModel)=>async (req,res,next)=>{
    try{
        const {id}=req.params;
        const data=await elementModel.findById(id);
        if(data==undefined)
        {
            throw new Error("data not found");
        }
        else{
            res.status(200).json({
                message:"data found",
                data:data
            })
        }
    }
    catch(err){
        next(err);
    }
    
}


module.exports={
    getAllFactory,
    getElementByIdFactory,
    createFactory,
    
}