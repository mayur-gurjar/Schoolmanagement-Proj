import { useState } from 'react'
import './form.css'
import { useNavigate } from "react-router-dom";


function Teachersignup() {

const navigate = useNavigate()
const[formvalue,setformvalue]=useState({
    teacherid:"",
    teachername:"",
    email:"",
    password:"",
    confirmpassword:""
})

    function handelchange(e){

      setformvalue({...formvalue,[e.target.name]:e.target.value})
    }
     async function handelsubmit(e){
     e.preventDefault()
     if(formvalue.password!== formvalue.confirmpassword){
        alert("password mismatched")
     }
     else{
    const response = await fetch("http://localhost:8080/api/teachersignin",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            teacherid:formvalue.teacherid,
            teachername:formvalue.teachername,
            email:formvalue.email,
            password:formvalue.password
        })
    })
    const res = await response.json()
    alert(res.massage)
    if(res.status){
        navigate('/teacherlogin')
    }
      
    }
     }

    return (
        
        <>
       
        <div className='con'>
        <div className="formcontainer">
            <h3>TEACHER SIGNIN</h3>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">TEACHER ID</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name='teacherid'  aria-describedby="emailHelp" placeholder="ID provided by school authority" onChange={handelchange}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword2">TEACHER NAME</label>
                    <input type="text" className="form-control" id="exampleInputPassword2" name='teachername' placeholder="Teacher name" onChange={handelchange}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword4">Email</label>
                    <input type="Email" className="form-control" id="exampleInputPassword4" name='email' placeholder="Enter your email" onChange={handelchange}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword3"> CREATE PASSWORD</label>
                    <input type="password" className="form-control" id="exampleInputPassword3" name='password' placeholder=" Create Password" onChange={handelchange}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword5"> CONFIRM PASSWORD</label>
                    <input type="password" className="form-control" id="exampleInputPassword5" name='confirmpassword' placeholder=" Confirm Password" onChange={handelchange}/>
                </div>
                
               
                <button type="submit" className="btn btn-warning formbtn" style={{margin:"10px 42%"}} onClick={handelsubmit}>Submit</button>
            </form>
            </div>
            </div>
        </>
    )
}

export default Teachersignup