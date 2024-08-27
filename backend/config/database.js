const mongoose = require("mongoose")

const DBconnection =  async ()=>{
    await mongoose.connect("mongodb+srv://mayurgurjar2001:*Mayur4db@cluster0.pdxhcio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("DB connected")
}


module.exports= DBconnection