import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { selectstudent } from "../../redux/sele_stu_slice"
import Singlestudent from "./singlestudent"

function Studentlist(){
    const [students , setstudents]=useState([])
    const[page,setpage]= useState(true)
    const dispatch = useDispatch()
    const getstudent=  async ()=>{
        
        const teacherid = localStorage.getItem("teacherid")
    
         try{
           const response =  await fetch("http://localhost:8080/api/getstudents",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                
                teacherid:teacherid
            })
    
           })
    
           const res = await response.json()
           await setstudents(res.data)
          console.log(students)
    
         }catch(err){
            console.log(err)
         }    }  

    useEffect(  ()=>{
    
        getstudent()

    },[])
//function to remove a student
 async function handelDelete(event,student_id){
    event.stopPropagation()
    if(window.confirm("Do You Want Remove ?")){
  try{
       const response =  await fetch("http://localhost:8080/api/removestudent",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            
            student_id:student_id
        })

       })

       const res = await response.json()
      
      alert(res.massage)
      if(res.status){
        getstudent()
      }

     }catch(err){
        console.log(err)
     }    }


}
// function to set student data and navigate to single student page
function Studentpage(data){
     setpage(false)
     dispatch(selectstudent(data))
}

//function to go to the previous page
function Handelpage(){
     setpage(true)
     getstudent()
}

    return(
        <>
           
        
{   page ?
    students.map(( student)=>{
        return(

        
        <div style={{display:"flex",margin:"20px auto",  width:"40%" , justifyContent:"space-between" , borderRadius:"10px" , backgroundColor:"#e1f4fa" , boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.1) "}} onClick={()=>Studentpage(student)}>
            <div style={{margin:'auto 10px'}}>
                <img style={{height:'60px' , width:"60px" , borderRadius:"50%"}} src={student.profileimg?student.profileimg:"https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg"}/>
            </div>
            <div>
                <h3> <b>{student.studentname}</b></h3>
                <p> Scholar id : <b>{student.enrollment}</b></p>
            </div>
            <div>
                <button className="btn" style={{margin:'50% 10px'}}  onClick={(event)=>handelDelete(event,student._id)}>❌ </button>
            </div>
        </div>
        )
    }):<Singlestudent Handelpage={Handelpage}/>
}
        </>
    )
}


export default Studentlist