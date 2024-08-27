const mongoose = require("mongoose") ;


const teachermodel = new mongoose.Schema({
    teacherid :{
        type:Number,
        required:true
    },
    teachername:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    img:{
        type:String
    }
})

module.exports = mongoose.model("teacher",teachermodel)