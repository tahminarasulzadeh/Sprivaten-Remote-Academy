import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchContent = createAsyncThunk(
     'content/fetchContent',
     async(info) => {
        console.log('action', info)
        const response = await fetch("http://localhost:3000/appointments/", {
         method : 'POST',
         headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(info)
        })

        const data = await response.json();
        console.log("Form submission result:", data )
        return data;
     }
)

const appointmentSlice = createSlice({
    name: "appointment",
    initialState: {
        formData: {
          name: null,
          email: null,
          department: null,
          time: null
        }
    },
    reducers: {
        getAppointment: (state, action) => {
            state.formData =  (action.payload);
            console.log('payload', action.payload)
        },
    },
 

});

export const {getAppointment} = appointmentSlice.actions;

export default appointmentSlice.reducer;