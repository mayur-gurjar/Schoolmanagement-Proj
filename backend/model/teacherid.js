const mongoose = require("mongoose")



const teacherid = new mongoose.Schema({},{strict:false})



module.exports = mongoose.model("teacherid",teacherid,"teacherids")