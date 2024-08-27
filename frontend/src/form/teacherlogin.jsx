import { Link, useNavigate } from 'react-router-dom'
import './form.css'
import { useState } from 'react'

function Teacherlog() {

    const navigate =useNavigate()
     const[value , setvalue] = useState({
        teacherid:"",
        teachername:"",
        password:""
     })
    function handelchange(e){
      setvalue({...value,[e.target.name]:e.target.value})
    }

     async function handelSubmit(e){
        e.preventDefault()
        const response = await fetch("http://localhost:8080/api/teacherlogin",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                teacherid:value.teacherid,
                teachername:value.teachername,
                password:value.password
            })
        })

        const res = await response.json()
        alert(res.massage)
        console.log(res.status)
        if(res.status){
            localStorage.setItem("teacherid", value.teacherid)
            localStorage.setItem("teachername", value.teachername)


           navigate("/teacherpage")
        }
    }

    return (
        <>
        <div className='con'>
        <div className="formcontainer">
            <h3>TEACHER LOGIN</h3>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">TEACHER ID</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Teacher ID " name='teacherid' onChange={handelchange}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword2">TEACHER NAME</label>
                    <input type="text" className="form-control" id="exampleInputPassword2" placeholder="Teacher name" name='teachername' onChange={handelchange}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword3">PASSWORD</label>
                    <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" name='password' onChange={handelchange}/>
                </div>
                
               
                <button type="submit" className="btn btn-warning formbtn" style={{margin:"10px 42%"}} onClick={handelSubmit}>Submit</button>
               
                <p className='text-center ' style={{color:"white"}}>Don't Have Account? <Link to={'/teachersignup'}> Click Here </Link></p>
                
                
            </form>
            
            </div>
            </div>
        </>
    )
}

export default Teacherlog