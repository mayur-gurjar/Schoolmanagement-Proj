const Student = require("../model/students")

const addstudent = async (req,res)=>{
    try{
    
    const{studentname,fathername,mothername,aadharno,enrollment,className,dob,mobileno,gender,email,password, teacherid}= req.body
    const profileImage = req?.file ? req?.file?.path:null
    if(!studentname|| !fathername || !mothername || !aadharno || !enrollment || !className || !dob || !mobileno || !gender  || !email || !password ){
      return res.status(400).json({status:false , massage:"All Field is Required",data:profileImage})
    }
    const studentENROLL= await Student.findOne({enrollment:enrollment}) ;
    if(studentENROLL){
      return res.status(400).json({status:false,massage:"Student already resisterd with this enroll no."})
    }
     await Student.create({
        studentname,fathername,mothername,aadharno,enrollment,className,dob,mobileno,gender,email,password,teacherid,profileimg:profileImage
     }).then(()=>{
        res.status(200).json({status:true,massage:"Student Added succefully"})
     })

    }catch(err){
        console.log(err)
    }
}

const Getsudents =  async ( req,res)=>{
   try{
     const {teacherid}= req.body
     const students = await Student.find({teacherid:teacherid}).select("-password")
     if(students){
      res.status(200).json({status:true,data:students})
     }
   }catch(err){
    console.log(err)
   }
}

const Removestudent = async (req, res)=>{
  try{
    const id = req.body.student_id
     await Student.deleteOne({_id:id}).then(()=>{
      res.status(200).json({status:true,massage:"Student Removed Succefully. "})
     })
  }catch(err){
    console.log(err)
  }
}

const Updatestudent = async (req,res)=>{
  try{
      const {studentname,fathername,mothername,aadharno,enrollment,className,dob,mobileno,gender,email}=req.body
      const findstu= await Student.findOne({enrollment:enrollment})
      const profileImage = req?.file? req?.file?.path:findstu?.profileimg
  
       await Student.updateOne({enrollment:enrollment},{$set:{studentname,fathername,mothername,aadharno,enrollment,className,dob,mobileno,gender,email,profileimg:profileImage}})
       .then(()=>{
        res.status(200).json({massage:"Student Details Updated ."})
       })
  }catch(err){
    console.log(err)
  }
}

const Loginstudent = async (req,res)=>{
  
  try{
    const {studentname,enrollment,password} = req.body.val
    if(!studentname || !enrollment || !password){
      return res.status(400).json({status:false,massage:"All field Required"})
    }

      const student = await Student.findOne({enrollment:enrollment});
      
      if(!student){
        return res.status(400).json({status:false,massage:"Wrong enrollment no."})

      }
      if(student.studentname!==studentname){
        return res.status(400).json({status:false,massage:"Student Name is incorrect"})

      }
      if(student.password!==password){
        return res.status(400).json({status:false,massage:"Wrong Password"})

      }

      return res.status(200).json({status:true,massage:"Log In Succefull"})



  }catch(err){
    console.log(err)
  }
  
} 

const GETsingalstud= async (req,res)=>{
  try{
     const{enrollment}= req.body
     
       const singalstu = await Student.findOne({enrollment:enrollment}).select("-password")
       if(singalstu){
         return res.status(200).json({data:singalstu, status:true})
       }else{
         return  res.status(400).json({massage:"student not found",status:false})
       }
  }catch(err){
   console.log(err)
  }
}
 



module.exports = {addstudent , Getsudents , Removestudent,Updatestudent,Loginstudent, GETsingalstud}