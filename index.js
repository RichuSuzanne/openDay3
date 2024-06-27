// 1. import using require

var express = require('express')
require("./connection")

const user=require('./model/user')
const userModel = require('./model/user')

//2. initiialization

var app = express()
//all properties of express given to app

//middleware
//3.api
// syntax=variable of express .get(path , request response)
//response is the op request is ip


app.get('/',(req,res)=>{
    res.send("hello")
})
//connection api
app.get('/path',(req,res)=>{
    res.send("login successfully completed")
})

app.use(express.json())//enabling that data in json format should be accepted

//to add data TO DB using post
app.post('/add',async(req,res)=>{
    //async used to wait
    //in case of any error inorder to hanlde its given inside try catch block
    try {
        console.log(req)
        await user(req.body).save() //all input coming from body of the req only
        //user from model
        res.send({message:"data added successfull"})
    } catch (error) {
        console.log(error)
    }
})

//viewing all users
app.get('/view',async(req,res)=>{
    try {
        const data = await user.find() //find is one of mongodb queries
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

//to delete a user
app.delete('/remove/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        var data = await user.findByIdAndDelete(req.params.id)
        res.send({message:'deleted'})
    } catch (error) {
        console.log(error)
    }
})

app.put('/edit/:id',async(req,res)=>{
    try {
        var data = await user.findByIdAndUpdate(req.params.id,req.body)//req.body is the updated value
        res.send({message:'updated',data})
    } catch (error) {
        console.log(error)
    }
})

//4.port allocation

app.listen(3000,()=>{
    console.log("port is up and running")
})