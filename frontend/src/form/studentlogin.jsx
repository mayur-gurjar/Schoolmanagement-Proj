import { useState } from 'react'
import './form.css'
import { useNavigate} from 'react-router-dom'

function Studentlog() {
    const navigate = useNavigate()
    const[val,setval]=useState({
        enrollment:"",
        studentname:"",
        password:"",
    })
    const[passspan,setpassspan]=useState(false)
    function Handelchange(e){
        setpassspan(false)

        setval({...val,[e.target.name]:e.target.value})


    }
    async function Handelsubmit(e){
        e.preventDefault()
        const response = await fetch("http://localhost:8080/api/studentlogin",{
            method:"POST",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify({
                val
            })
         })
        
         const res = await response.json()
         alert(res.massage)
        
         if(res.status){
            localStorage.setItem("studentEnroll",val.enrollment)
            navigate("/studentpage")
         }
    
    }

    return (
        <>
        <div className='con'>
        <div className="formcontainer">
            <h3>STUDENT LOGIN</h3>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">STUDENT ID</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enrollment Number" name="enrollment" onChange={Handelchange}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword2">STUDENT NAME</label>
                    <input type="text" className="form-control" id="exampleInputPassword2" placeholder="Student name" name="studentname" onChange={Handelchange}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword3">PASSWORD</label>
                    <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" name='password' onChange={Handelchange}/>
                </div>
                
                <button type="submit" className="btn btn-warning formbtn" style={{margin:"10px 42%"}} onClick={Handelsubmit}>Submit</button>
            </form>
            </div>
            </div>
        </>
    )
}

export default Studentlog