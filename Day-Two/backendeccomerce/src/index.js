const express=require("express");
const app=express();
const connect=require("./configs/db");
const cors=require("cors")
const userController=require("./controllers/userController");
const addressContoller=require("./controllers/address.controller");
const brandsController=require("./controllers/brandsController");
const productCOntroller=require("./controllers/productController");
const ReviewsController=require("./controllers/reviews.controllers");
app.use(express.json());

app.use(cors());

app.use("/users",userController);
app.use("/address",addressContoller);
app.use("/products",productCOntroller);
app.use("/brands",brandsController);
app.use("/reviews",ReviewsController);

app.listen(5000,async()=>{
    try{
     await connect();
     console.log("connected")
    }catch(err){
        console.log(err.message);
    }
})
