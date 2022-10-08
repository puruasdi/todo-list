import { createSlice } from '@reduxjs/toolkit'

export const activitySlice = createSlice({
    name: 'activity',
    initialState: {
        selectedActivity: '',
    },
    reducers: {
        setSelectedActivity: (state, action) => {
            state.selectedActivity = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSelectedActivity } = activitySlice.actions

export default activitySlice.reducer