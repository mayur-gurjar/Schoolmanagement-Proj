import { useEffect, useState } from "react"
function Onestudent(){

    const [student,setstudent]=useState()
   async function GETstudent(){
        const enrollment = localStorage.getItem("studentEnroll")
        console.log(enrollment)
        try{
         const response = await fetch("http://localhost:8080/api/getsingalstud",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
             enrollment
            })
         })
         const res=  await response.json()
         console.log(res)
         if(res.status){
            setstudent(res.data)
            
         }else{
            alert(res.massage)
         }
        }catch(err){
            console.log(err)
        }
    }
    
     useEffect(()=>{
        GETstudent()
     },[])


    return(
   <>
            <h2 className="text-center">STUDENT DETAILS</h2>

            <form>
                <div className="maindivsingle">
                    <div className="rowdivsingle">
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputEmail1">STUDENT FULL NAME :</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled value={student?.studentname}  />
                        </div>
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputPassword1"> ENROLLMENT NUMBER:</label>
                            <input type="text" className="form-control" id="exampleInputPassword1"  disabled value={student?.enrollment} />
                        </div>
                    </div>
                    <div className="rowdivsingle">
                        <div>
                            <img style={{ height: "140px", width: "110px", border: "1px solid black", margin: "auto 50%" }} src={ student?.profileimg?student?.profileimg:"https://www.seekpng.com/png/detail/413-4139803_unknown-profile-profile-picture-unknown.png"} />
                        </div>
                    </div>
                    
                </div>
                <div className="maindivsingle">
                <div className="rowdivsingle">
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputEmail2">FATHER NAME :</label>
                            <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" name="fathername"  disabled  value={student?.fathername} />
                        </div>
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputPassword2"> MOTHER NAME:</label>
                            <input type="text" className="form-control" id="exampleInputPassword2" name="mothername"   disabled value={student?.mothername}  />
                        </div>
                    </div>
                    <div className="rowdivsingle">
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputEmail3">AADHAR NUMBER :</label>
                            <input type="text" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" name="aadharno"  disabled value={student?.aadharno}  />
                        </div>
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputPassword3"> MOBILE NUMBER:</label>
                            <input type="text" className="form-control" id="exampleInputPassword3" name="mobileno"   disabled value={student?.mobileno} />
                        </div>
                    </div>
                </div>
                <div className="maindivsingle">
                <div className="rowdivsingle">
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputEmail4">EMAIL ID :</label>
                            <input type="email" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" name="email"  disabled  value={student?.email} />
                        </div>
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputPassword4"> GENDER:</label>
                            <select className="form-control" id="exampleFormControlSelect4"  name="gender"  disabled value={student?.gender} >
                                <option>Male</option>
                                <option>Female</option>

                            </select>
                        </div>
                    </div>
                    <div className="rowdivsingle">
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputEmail5">CLASS  NAME:</label>
                            <input type="text" className="form-control" id="exampleInputEmail5" aria-describedby="emailHelp" name="className"  disabled  value={student?.className} />
                        </div>
                        <div className="form-group" style={{ display: "flex" }}>
                            <label for="exampleInputEmail5">DATE OF BIRTH :</label>
                            <input type="date" className="form-control" id="exampleInputEmail6" aria-describedby="emailHelp" name="dob"  disabled value={student?.dob} />
                        </div>
                        
                    </div>
                </div>

            </form>
   </>

    )
}

export default Onestudent