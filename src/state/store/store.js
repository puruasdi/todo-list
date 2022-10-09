import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from '../slice/loadingsSlice'
import activityReducer from '../slice/activitySlice'
import todoReducer from "../slice/todoSlice"

export default configureStore({
    reducer: {
        loading: loadingReducer,
        activity: activityReducer,
        todo: todoReducer
    },
})