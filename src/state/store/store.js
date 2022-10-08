import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from '../slice/loadingsSlice'
import alertReducer from '../slice/alertSlice'

export default configureStore({
    reducer: {
        loading: loadingReducer,
        alert: alertReducer
    },
})