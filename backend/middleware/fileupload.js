const multer = require("multer") ;
const{CloudinaryStorage}= require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;



cloudinary.config({
    cloud_name:'dngg9or3y',
    api_key:'144398739191118',
    api_secret:'AH_3VBa2moHTPqXHNmiuM1FMmmE'
    
})


const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'profileimg',
        format: async(req,file)=>'png',
        public_id:(req,file)=>file.originalname.split('.')[0]+""
    }
});
const cloudinaryFileuploader= multer({storage:storage});


module.exports={
    cloudinaryFileuploader
  
}