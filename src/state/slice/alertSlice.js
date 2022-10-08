import { createSlice } from '@reduxjs/toolkit'

export const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        showAlert: false,
        alertName: ""
    },
    reducers: {
        setShowAlert: (state, action) => {
            state.showAlert = action.payload
        },
        setAlertName: (state, action) => {
            state.alertName = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setShowAlert, setAlertName } = alertSlice.actions

export default alertSlice.reducer