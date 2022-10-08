import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        contentLoading: false,
        addLoading: false,
        deleteLoading: false
    },
    reducers: {
        setContentLoading: (state, action) => {
            state.contentLoading = action.payload
        },
        setAddLoading: (state, action) => {
            state.addLoading = action.payload
        },
        setDeleteLoading: (state, action) => {
            state.deleteLoading = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setContentLoading, setAddLoading, setDeleteLoading } = loadingSlice.actions

export default loadingSlice.reducer