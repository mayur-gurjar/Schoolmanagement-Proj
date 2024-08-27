const express =  require("express");
const DBconnection = require("./config/database");
const Cors =require("cors")
const bodyparser =require("body-parser");
const Teacherrout =require("./routes/allroutes");


const app = express();
app.use(bodyparser.json());
app.use(Cors({
    origin:"http://localhost:5173"
}))
app.use("/api",Teacherrout);



app.listen(8080,()=>{
    DBconnection()
    console.log("server started")
})