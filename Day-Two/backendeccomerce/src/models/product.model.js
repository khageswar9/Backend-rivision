const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    color:[{type:String,required:true}],
    size:[{type:String,required:true}],
    categories:[{type:String,required:true}],
    brandId:{
        ref:"brands",
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    reviewsId:[{
        ref:"reviews",
        type:mongoose.Schema.Types.ObjectId,
        required:false
}]
},{
    timestamps:true,
    versionKey:false
})
module.exports=mongoose.model("products",productSchema);
