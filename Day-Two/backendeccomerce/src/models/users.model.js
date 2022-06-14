const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    passward:{type:String,required:true},
    addressId:[{
        ref:"address",
        type:mongoose.Schema.Types.ObjectId,
        required:false,
    }],
    cart:[{
        ref:"products",
        type:mongoose.Schema.Types.ObjectId,
        required:false,
}]
},
{
    timestamps:true,
    versionKey:false
})
module.exports=mongoose.model("myusers",userSchema);