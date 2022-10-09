import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        selectedSort: "Terbaru",
        showTodoModal: false,
        selectedTodo: ''
    },
    reducers: {
        setSelectedSort: (state, action) => {
            state.selectedSort = action.payload
        },
        setShowTodoModal: (state, action) => {
            state.showTodoModal = action.payload
        },
        setSelectedTodo: (state, action) => {
            state.selectedTodo = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSelectedSort, setSelectedTodo, setShowTodoModal } = todoSlice.actions

export default todoSlice.reducer