// establishing a connection to the db

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://richussherry02:Engineer@cluster0.cpla66r.mongodb.net/OpenBatchDB1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((error)=>{
    console.log(error)
})
