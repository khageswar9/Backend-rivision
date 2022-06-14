const Brands=require("../models/brands.model");
const express=require("express");

const router=express.Router();

router.post("/",async(req,res)=>{
try{
const user=await Brands.create(req.body);
    return  res.status(201).send(user);
}catch(err){
return res.status(400).send({
    statue:"failure",
    msg:err.message
})
}
})


router.get("/",async(req,res)=>{
    try{
    const user=await Brands.find().lean().exec();
        return  res.status(200).send(user);
    }catch(err){
    return res.status(500).send({
        statue:"failure",
        msg:err.message
    })
    }
    })
    router.get("/:id",async(req,res)=>{
        try{
        const user=await Brands.findById({"_id":req.params.id}).lean().exec();
            return  res.status(200).send(user);
        }catch(err){
        return res.status(500).send({
            statue:"failure",
            msg:err.message
        })
        }
        })
        router.patch("/:id",async(req,res)=>{
            try{
            const user=await Brands.findByIdAndUpdate(req.params.id,req.body).lean().exec();
                return  res.status(200).send(user);
            }catch(err){
            return res.status(500).send({
                statue:"failure",
                msg:err.message
            })
            }
            });

    module.exports=router;