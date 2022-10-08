import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from '../slice/loadingsSlice'
import alertReducer from '../slice/alertSlice'
import activityReducer from '../slice/activitySlice'
import todoReducer from "../slice/todoSlice"

export default configureStore({
    reducer: {
        loading: loadingReducer,
        alert: alertReducer,
        activity: activityReducer,
        todo: todoReducer
    },
})