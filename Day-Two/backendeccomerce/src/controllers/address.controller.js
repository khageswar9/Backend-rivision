const express=require("express")
const router=express.Router();
const Address=require("../models/address.model");
router.post("/",async(req,res)=>{

try{
const address=await Address.create(req.body);
return res.status(201).send(address)
}catch(err){
    return res.status(500).send({
        statue:"failure",
        msg:err.message
    })
}

})
router.get("/",async(req,res)=>{

    try{
    const address=await Address.find().lean().exec();
    return res.status(200).send(address)
    }catch(err){
        return res.status(500).send({
            statue:"failure",
            msg:err.message
        })
    }
    
    })
    router.get("/:id",async(req,res)=>{

        try{
        const address=await Address.findById({"_id":req.params.id}).lean().exec();
        return res.status(200).send(address)
        }catch(err){
            return res.status(500).send({
                statue:"failure",
                msg:err.message
            })
        }
        
        })
        router.patch("/:id",async(req,res)=>{

            try{
            const address=await Address.findByIdAndUpdate(req.params.id,req.body).lean().exec();
            return res.status(200).send(address)
            }catch(err){
                return res.status(500).send({
                    statue:"failure",
                    msg:err.message
                })
            }
            
            })
      
            router.delete("/:id",async(req,res)=>{

                try{
                const address=await Address.findByIdAndDelete({_id:req.params.id});
                return res.status(200).send(address)
                }catch(err){
                    return res.status(500).send({
                        statue:"failure",
                        msg:err.message
                    })
                }
                
                })
module.exports=router;