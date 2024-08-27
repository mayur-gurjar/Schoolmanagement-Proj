import { useNavigate } from "react-router-dom"
import "./teacher.css"
import Addstudent from "../studentcomponent/addstudent"
import Studentlist from "../studentcomponent/studentlist"
import Teacherprofile from "./teacherprofile"
import { useState } from "react"

function Techerspage(){
    

    const[page,setpage]=useState("Addstudents")
    const navigate =useNavigate()
    function handellogout(){
        localStorage.clear("teacherid")
        navigate("/")
    }

    function pagechange(pages){
        
     setpage(pages)
    }

    return(
        <>
        <div>
            <div className="navcontain">
                <div className="navinner">
                <img alt="" src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/e48cd8b6-d0dd-4b60-8ef6-ad3aae616a33/38776c76-b716-4cc7-ad29-3b3c6ed41f15.png"/>
                <p>Nitya Sharma</p>
                </div>
                
                    <button className="btn  " onClick={handellogout}>LOG OUT</button>
                
            </div>
            <div style={{display:"flex" ,flexDirection:"row"}}>
            <div className="techersdiv">
                <div  style={{backgroundColor:"purple", color:"whitesmoke"}} onClick={()=>pagechange("profile")}>
                 <h1>Your <br/>Profile</h1>
                </div>
                
                <div style={{backgroundColor:"rgb(0, 136, 255)",color:"whitesmoke"}} onClick={()=>pagechange("Addstudents")}>
                 <h1>Add <br/>Student</h1>
                    
                </div>
                <div style={{backgroundColor:"rgb(255, 179, 0)",color:"black"}} onClick={()=>pagechange("studentslist")}>
                 <h1>Student <br/>List</h1>
                    
                </div>
            </div>
            <div className="othercomponent">
          
           {(()=>{
            switch(page){
                case "profile":
                return <Teacherprofile/>   
                case "Addstudents":
                return <Addstudent/> 
                case "studentslist":
                return <Studentlist/>         
            }
           })()}
            </div>
            </div>
        </div>
        </>
    )
}

export default Techerspage