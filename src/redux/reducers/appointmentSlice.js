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

    // extraReducers: (builder) => {
    //     builder.addCase(fetchContent.pending, (state) => {
    //       state.isLoading = true
    //     })
    //     builder.addCase(fetchContent.fulfilled, (state, action) => {
    //       state.isLoading = false
    //       state.formData.name = action.payload.name;
    //       state.formData.email = action.payload.email;
    //       state.formData.department = action.payload.department;
    //       state.formData.time = action.payload.time;
          
    //     })
    //     builder.addCase(fetchContent.rejected, (state, action) => {
    //       state.isLoading = false
    //       state.error = action.error.message
    //     })
    //   },

});

export const {getAppointment} = appointmentSlice.actions;

export default appointmentSlice.reducer;