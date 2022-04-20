import {createSlice} from "@reduxjs/toolkit"

const employeeSlice=createSlice({
    name:"employees",
    initialState:{
        users:[]
    },
    reducers:{
        addEmployees:(state,action)=>{

        },

    }
})

export const{addEmployees}=employeeSlice.actions
export default employeeSlice.reducer