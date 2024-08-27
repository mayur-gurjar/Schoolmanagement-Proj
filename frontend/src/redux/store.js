import {configureStore} from "@reduxjs/toolkit"
import studentreducer from "./sele_stu_slice"



const store = configureStore({
    reducer:{
        student:studentreducer
    }
})

export default store