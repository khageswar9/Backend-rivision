const mongoose=require("mongoose");
const addressSchema=new mongoose.Schema({
        
        state:{type:String,required:true},
        district:{type:String,required:true},
        city:{type:String,required:true},
        line:{type:String,required:true}
    
},
{
    timestamps:true,
    versionKey:false
})
module.exports=mongoose.model("address",addressSchema);