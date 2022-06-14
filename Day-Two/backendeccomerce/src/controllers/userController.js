const User=require("../models/users.model");
const Address=require("../models/address.model");
const express=require("express");
const productModel = require("../models/product.model");

const router=express.Router();

router.post("/",async(req,res)=>{
try{
const user=await User.create(req.body);
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
    const user=await User.find().lean().exec();
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
        const user=await User.findById({"_id":req.params.id}).populate({path:"addressId"}).populate({path:"cart"}).lean().exec();
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
            const user=await User.findByIdAndUpdate(req.params.id,req.body).lean().exec();
                return  res.status(200).send(user);
            }catch(err){
            return res.status(500).send({
                statue:"failure",
                msg:err.message
            })
            }
            });
           
            router.post("/:id/address",async(req,res)=>{
                try{
                const address=await Address.create(req.body);
                const user=await User.findByIdAndUpdate(req.params.id,{$push: { addressId: address._id }});
                    return  res.status(201).send(user);
                }catch(err){
                return res.status(400).send({
                    statue:"failure",
                    msg:err.message
                })
                }
                })  
                router.patch("/:id/address/:idx", async (req, res) => {
                    try {
                        const address = await Address.findByIdAndUpdate(req.params.idx,req.body);
                        return res.status(200).send({ "address": address });
                    } catch (error) {
                        return res.status(500).send({ "error": error.message });
                    }
                });
                
                
                router.delete("/:id/address/:idx", async (req, res) => {
                    try {
                        const address = await Address.findByIdAndDelete(req.params.idx);
                        const user = await User.findByIdAndUpdate(req.params.id, { $pull: { addressId:req.params.idx }});
                        return res.status(200).send({ "address": address });
                    } catch (error) {
                        return res.status(500).send({ "error": error.message });
                    }
                });
                
               
                

                router.post("/:id/products/:idx",async(req,res)=>{
                    try{
                    const product=await productModel.findById({_id:req.params.idx});
                    const user=await User.findByIdAndUpdate(req.params.id,{$push: { cart: product._id }});
                        return  res.status(201).send(user);
                    }catch(err){
                    return res.status(400).send({
                        statue:"failure",
                        msg:err.message
                    })
                    }
                    }) 
                    router.delete("/:id/products/:idx", async (req, res) => {
                        try {
                            
                            const user = await User.findByIdAndUpdate(req.params.id, { $pull: { cart:req.params.idx }});
                            return res.status(200).send({ user:user });
                        } catch (error) {
                            return res.status(500).send({ "error": error.message });
                        }
                    });
                     
module.exports=router;
