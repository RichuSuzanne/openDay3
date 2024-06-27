const mongoose = require('mongoose')
//importing mangoose and defining schema 
const schema = mongoose.Schema({
    Name:String,
    Age:Number,
    Place:String,
    Phone:Number
})
//creating user model called user using the declared schema - in this model data is added to db
const userModel =  mongoose.model("user",schema)
module.exports=userModel
//export it
