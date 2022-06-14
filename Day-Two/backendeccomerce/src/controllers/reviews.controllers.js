const express=require("express")
const router=express.Router();
const Reviews=require("../models/reviews.model");




router.post("/",async(req,res)=>{

try{
if(req.body.rating<=0||req.body.rating>5){
    alert("Please give rating 1 to 5");
    return res.status(500).send({
        statue:"failure",
        msg:err.message
    })
}


const reviews=await Reviews.create(req.body);
return res.status(201).send(reviews);
}catch(err){
    return res.status(500).send({
        statue:"failure",
        msg:err.message
    })
}

})
router.get("/",async(req,res)=>{

    try{
    const reviews=await Reviews.find().populate({path:"userId"}).lean().exec();
    return res.status(200).send(reviews);
    }catch(err){
        return res.status(500).send({
            statue:"failure",
            msg:err.message
        })
    }
    
    })
    router.get("/:id",async(req,res)=>{

        try{
        const reviews=await Reviews.findById({"_id":req.params.id}).lean().exec();
        return res.status(200).send(reviews)
        }catch(err){
            return res.status(500).send({
                statue:"failure",
                msg:err.message
            })
        }
        
        })
        router.patch("/:id",async(req,res)=>{

            try{
            const reviews=await Reviews.findByIdAndUpdate(req.params.id,req.body).lean().exec();
            return res.status(200).send(reviews)
            }catch(err){
                return res.status(500).send({
                    statue:"failure",
                    msg:err.message
                })
            }
            
            })


            router.delete("/:id",async(req,res)=>{

                try{
                const reviews=await Reviews.findByIdAndDelete({_id:req.params.id});
                return res.status(200).send(reviews);
                }catch(err){
                    return res.status(500).send({
                        statue:"failure",
                        msg:err.message
                    })
                }
                
                })
        
    
        
module.exports=router;