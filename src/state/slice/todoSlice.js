import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        selectedSort: "Terbaru"
    },
    reducers: {
        setSelectedSort: (state, action) => {
            state.selectedSort = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSelectedSort } = todoSlice.actions

export default todoSlice.reducer