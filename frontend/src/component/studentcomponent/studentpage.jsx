// import { useNavigate } from "react-router-dom"
import "./students.css"
import Onestudent from "./studentprofile"
// import { useState } from "react"


function Studentpage(){
    

    


    return(
        <>
        <div>
            <div className="navcontainer">
                <div className="navinner">
                <img alt="" src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/e48cd8b6-d0dd-4b60-8ef6-ad3aae616a33/38776c76-b716-4cc7-ad29-3b3c6ed41f15.png"/>
                <p>Nitya Sharma</p>
                </div>
                
                    <button className="btn  " >LOG OUT</button>
                
            </div>
            <div style={{display:"flex" ,flexDirection:"row"}}>
            <div className="studentdiv">
                <div  style={{backgroundColor:"rgb(10, 96, 226)", color:"whitesmoke"}} >
                 <h1>Your <br/>Profile</h1>
                </div>
                
               
            </div>
            <div className="othercomponent">
          
            <Onestudent/>
            </div>
            </div>
        </div>
        </>
    )
}

export default Studentpage