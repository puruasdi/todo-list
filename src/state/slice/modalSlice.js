import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalDelete: false,
    },
    reducers: {
        setModalDelete: (state, action) => {
            state.modalDelete = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setModalDelete } = modalSlice.actions

export default modalSlice.reducer