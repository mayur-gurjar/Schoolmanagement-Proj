const express =  require("express");
const DBconnection = require("./config/database");
const Cors =require("cors")
const bodyparser =require("body-parser");
const Routes =require("./routes/allroutes");


const app = express();
app.use(bodyparser.json());
app.use(Cors({
    origin:"http://localhost:5173"
}))
app.use("/api",Routes);



app.listen(8080,()=>{
    DBconnection()
    console.log("server started")
})