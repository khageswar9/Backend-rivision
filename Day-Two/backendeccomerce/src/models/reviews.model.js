const mongoose=require("mongoose")
const reviewSchema=new mongoose.Schema({

userId:[{
    ref:"myusers",
    type:mongoose.Schema.Types.ObjectId,
    required:true
}]
,
description :{type:String ,required:true},
rating:  {type:Number,required:true}

}
,{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("reviews",reviewSchema);
