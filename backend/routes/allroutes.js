const express = require("express")
const teachercontroller = require("../controler/teachercontrollers")
const studentscontroller = require("../controler/studentcontrollers")
const { cloudinaryFileuploader } = require("../middleware/fileupload")



const router = express.Router()

router.route("/teachersignin").post(teachercontroller.teachersignin)
router.route("/teacherlogin").post(teachercontroller.teacherlogin)
router.route("/addstudents").post(cloudinaryFileuploader.single("profileimg"),studentscontroller.addstudent)
router.route("/getstudents").post(studentscontroller.Getsudents)
router.route("/removestudent").post(studentscontroller.Removestudent)
router.route("/updatestudent").put(cloudinaryFileuploader.single("profileimg"),studentscontroller.Updatestudent)
router.route("/studentlogin").post(studentscontroller.Loginstudent)
router.route("/getsingalstud").post(studentscontroller.GETsingalstud)











module.exports = router