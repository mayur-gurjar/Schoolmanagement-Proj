import { useState } from "react"
import "./students.css"
function Addstudent() {
    const teacherid = localStorage.getItem("teacherid")

    const [formval, setformval] = useState({
        studentname: "",
        fathername: "",
        mothername: "",
        aadharno: "",
        enrollment: "",
        className: "",
        dob: "",
        mobileno: "",
        gender: "",
        email: "",
        password: "",
        profileimg:null,
        teacherid:teacherid


    })
    function handelChange(e) {
        setformval({ ...formval, [e.target.name]: e.target.value })

    }
    function handelfile(e){
        setformval({...formval,profileimg:e.target.files[0]})
        console.log(e.target.files[0])
    }


    async function handelsubmit(e) {
        e.preventDefault()
        console.log(formval)
        const formdata = new FormData()
        for(const key in formval){
            formdata.append(key,formval[key]);
        }
        
        const response = await fetch("http://localhost:8080/api/addstudents", {
            method: "POST",
            
            body: formdata
                
        
        })
        const res = await response.json()
        console.log(res.data)
        alert(res.massage)
        if (res.status) {
            setformval({
                studentname: "",
                fathername: "",
                mothername: "",
                aadharno: "",
                enrollment: "",
                className: "",
                dob: "",
                mobileno: "",
                gender: "",
                email: "",
                password: "",
                profileimg:null


            })
        }

    }

    
    return (
        <>
            <h2 className="text-center">ADD STUDENT'S</h2>
            <form>
                <div className="rowdiv">
                    <div className="form-group">
                        <label for="exampleInputEmail1">STUDENT FULL NAME</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" name="studentname" value={formval.studentname} onChange={handelChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1"> FATHER NAME</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="enter father name" name="fathername" value={formval.fathername} onChange={handelChange} />
                    </div>
                </div>
                <div className="rowdiv">
                    <div className="form-group">
                        <label for="exampleInputEmail2"> MOTHER NAME</label>
                        <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter mother name" name="mothername" value={formval.mothername} onChange={handelChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword2">AADHAR NUMBER </label>
                        <input type="text" className="form-control" id="exampleInputPassword2" placeholder="enter aadhar no." name="aadharno" value={formval.aadharno} onChange={handelChange} />
                    </div>
                </div>
                <div className="rowdiv">
                    <div className="form-group">
                        <label for="exampleInputEmail3">ENROLLMENT NO.</label>
                        <input type="text" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter enroll. no." name="enrollment" value={formval.enrollment} onChange={handelChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword3">CLASS</label>
                        <input type="text" className="form-control" id="exampleInputPassword3" placeholder="class" name="className" value={formval.className} onChange={handelChange} />
                    </div>
                </div>
                <div className="rowdiv">
                    <div className="form-group">
                        <label for="exampleInputEmail4">DATE OF BIRTH</label>
                        <input type="date" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" placeholder="date of birth" name="dob" value={formval.dob} onChange={handelChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword4">STUDENT MO. NO.</label>
                        <input type="text" className="form-control" id="exampleInputPassword4" placeholder="Mobile no." name="mobileno" value={formval.mobileno} onChange={handelChange} />
                    </div>
                </div>
                <div className="rowdiv">
                    <div className="form-group">
                        <label for="exampleInputEmail">GENDER</label>
                        <select className="form-control" id="exampleFormControlSelect1" name="gender" onChange={handelChange} >
                            <option>Male</option>
                            <option>Female</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword5">STUDENT EMAIL</label>
                        <input type="email" className="form-control" id="exampleInputPassword5" placeholder=" Enter email" name="email" value={formval.email} onChange={handelChange} />
                    </div>
                </div>
                <div className="rowdiv">
                    <div className="form-group">
                        <label for="exampleInputEmail6">UPLOAD IMAGE</label>
                        <input type="file" className="form-control" id="exampleInputEmail6" aria-describedby="emailHelp" placeholder="Create Student password" name="password" onChange={handelfile} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail6">CREATE STUDENT PASSWORD</label>
                        <input type="text" className="form-control" id="exampleInputEmail6" aria-describedby="emailHelp" placeholder="Create Student password" name="password" value={formval.password} onChange={handelChange} />
                    </div>

                </div>
                <button type="submit" className="btn btn-primary " style={{ marginLeft: "44%", height: "50px", width: "100px" }} onClick={handelsubmit}>Submit</button>
            </form>
        </>
    )
}

export default Addstudent