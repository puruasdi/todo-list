import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from '../slice/loadingsSlice'
import activityReducer from '../slice/activitySlice'
import todoReducer from "../slice/todoSlice"
import modalReducer from "../slice/modalSlice"

export default configureStore({
    reducer: {
        loading: loadingReducer,
        activity: activityReducer,
        todo: todoReducer,
        modal: modalReducer
    },
})