const mongoose = require("mongoose");

const connect = ()=>{
  return mongoose.connect("mongodb+srv://khageswar9:Dellinspire123@mychatapp.ymdjs.mongodb.net/?retryWrites=true&w=majority");
};

module.exports = connect;