const Teacher =require("../model/teacherschema") ;
const Teacherid = require("../model/teacherid")


const teachersignin = async (req,res)=>{
    try{

        const{teacherid,teachername,password,email}=req.body
         const id  = await Teacher.findOne({teacherid:teacherid}) 
         const Email  = await Teacher.findOne({email:email}) 

         if(id){
           return  res.status(400).json({massage:"User already exist with this ID , Contact to authority" ,status:false})
         }
         if(Email){
            return  res.status(400).json({massage:"User already exist with Email ID , Use otherOne" ,status:false})
          }
         
        const validid = await Teacherid.findOne({$and:[{teacherid:teacherid},{teachername:teachername}]});
        if(!validid){
           return  res.status(400).json({massage:"Wrong id or name! , Contact to authority",status:false})
            
        }
        
        await Teacher.create({
            teacherid,
            teachername,
            password,
            email   
        }).then(()=>{
            res.status(200).json({massage:"registration succesfull", status:true})
        })
    }catch(err){
        res.status(400).json({massage:err.massage, status:false})

        console.log(err)

    }
    
}

const teacherlogin= async (req,res)=>{

    try{
    const {teacherid,teachername,password}=req.body
    if(!teacherid|| !teachername||!password){
        return res.status(400).json({status:false,massage:"All fields Required"})
    }
   const teacher= await Teacher.findOne({teacherid:teacherid})
   const teachersPASS = await Teacher.findOne({password:password})
   const teachersNM = await Teacher.findOne({teachername:teachername})


   if(!teacher){
    return res.status(400).json({status:false, massage:"wrong ID"})
   }
   if(teacher.teachername!==teachername){
    return res.status(400).json({status:false, massage:"wrong USER NAME !, enter valid name"})
   }

   if(teacher.password!==password){
    return res.status(400).json({status:false, massage:"wrong password enter valid password"})
   }

   res.status(200).json({status:true,massage:"LOG IN succeful"})

}catch(err){
    console.log(err)
}


}

module.exports= {teachersignin,teacherlogin}