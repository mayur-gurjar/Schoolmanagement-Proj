import { createSlice } from "@reduxjs/toolkit";

const studentslice = createSlice({
    name:"student",
    initialState:{
        selectstudent:null
    },
    reducers:{
        selectstudent:(state,action)=>{
            state.selectstudent= action.payload
        }
    }
})

export const {selectstudent}= studentslice.actions
export default studentslice.reducer