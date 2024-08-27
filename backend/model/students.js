const mongoose = require("mongoose") ;


const studentschema = new mongoose.Schema({
    studentname:{
        type:String,
        required:true
    },
    fathername:{
        type:String,
        required:true
    },
    mothername:{
        type:String,
        required:true
    },
    aadharno:{
        type:Number,
        required:true
    },
    enrollment:{
        type:Number,
        required:true
    },
    className:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    mobileno:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    teacherid:{
        type:Number,
        
    },
    profileimg:{
        type:String
    }

})

module.exports = mongoose.model("student", studentschema)