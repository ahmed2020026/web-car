import { configureStore } from '@reduxjs/toolkit'
import Car_Reducer from './Slice'

const Store = configureStore({
    reducer:{
        Cars: Car_Reducer
    }
})

export default Store
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;