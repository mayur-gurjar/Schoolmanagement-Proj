import { useState } from "react"
import "./students.css"
import {useSelector} from "react-redux"

function Singlestudent({ Handelpage}) {
    const {selectstudent} = useSelector((store)=>store.student)
    const[student, setstudent]=useState(selectstudent)


   function Handelchange(e){
       setstudent( {...student,[e.target.name]:e.target.value})
      
   }
   function Handelfilechange(e){
    
    setstudent({...student,profileimg:e.target.files[0]})
    
   }

   async function Handelupdate(e){
    e.preventDefault()
    console.log(student)
    const formdata = new FormData()
    for(const key in student){
        formdata.append(key,student[key])
    }
    try{
       const response = await fetch("http://localhost:8080/api/updatestudent",{
        method:"PUT",
       
        body:formdata
       })
       const res = await  response.json()
       alert(res.massage)
       
    }catch(err){
        console.log(err)
    }

   }

    return (
        <>

            <button className="btn" onClick={Handelpage} style={{ fontSize: "20px", borderRadius: "20px" ,position:"static"}}> ◀ Back</button>
            <h2 className="text-center">STUDENT DETAILS</h2>

            <form>
                <div className="maindivsingle">
                    <div className="rowdivsingle">
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputEmail1">STUDENT FULL NAME :</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled  value={student.studentname} />
                        </div>
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputPassword1"> ENROLLMENT NUMBER:</label>
                            <input type="text" className="form-control" id="exampleInputPassword1"  disabled value={student.enrollment} />
                        </div>
                    </div>
                    <div className="rowdivsingle">
                        <div>
                            <img style={{ height: "140px", width: "110px", border: "1px solid black", margin: "auto 50%" }} src={student.profileimg?student.profileimg:"https://www.seekpng.com/png/detail/413-4139803_unknown-profile-profile-picture-unknown.png"} />
                            <input type="file"  style={{padding:"5px" , marginLeft:"40%"}} onChange={Handelfilechange}/>
                        </div>
                    </div>
                    
                </div>
                <div className="maindivsingle">
                <div className="rowdivsingle">
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputEmail2">FATHER NAME :</label>
                            <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" name="fathername" value={student.fathername} onChange={Handelchange} />
                        </div>
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputPassword2"> MOTHER NAME:</label>
                            <input type="text" className="form-control" id="exampleInputPassword2" name="mothername" value={student.mothername}  onChange={Handelchange} />
                        </div>
                    </div>
                    <div className="rowdivsingle">
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputEmail3">AADHAR NUMBER :</label>
                            <input type="text" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" name="aadharno" value={student.aadharno} onChange={Handelchange} />
                        </div>
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputPassword3"> MOBILE NUMBER:</label>
                            <input type="text" className="form-control" id="exampleInputPassword3" name="mobileno" value={student.mobileno}  onChange={Handelchange}/>
                        </div>
                    </div>
                </div>
                <div className="maindivsingle">
                <div className="rowdivsingle">
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputEmail4">EMAIL ID :</label>
                            <input type="email" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" name="email" value={student.email} onChange={Handelchange} />
                        </div>
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputPassword4"> GENDER:</label>
                            <select className="form-control" id="exampleFormControlSelect4"  name="gender" value={student.gender} onChange={Handelchange} >
                                <option>Male</option>
                                <option>Female</option>

                            </select>
                        </div>
                    </div>
                    <div className="rowdivsingle">
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputEmail5">CLASS  NAME:</label>
                            <input type="text" className="form-control" id="exampleInputEmail5" aria-describedby="emailHelp" name="className" value={student.className} onChange={Handelchange} />
                        </div>
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputEmail5">DATE OF BIRTH :</label>
                            <input type="date" className="form-control" id="exampleInputEmail6" aria-describedby="emailHelp" name="dob"  value={student.dob} onChange={Handelchange}/>
                        </div>
                        
                    </div>
                </div>
                <button className="btn btn-danger" style={{margin:"10px 46%" , padding:"10px"}} onClick={Handelupdate}> UPDATE</button>

            </form>
        </>
    )
}

export default Singlestudent
