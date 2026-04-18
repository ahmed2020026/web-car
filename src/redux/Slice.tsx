import { createSlice } from "@reduxjs/toolkit"
import type { CarType } from "../types/Car.type"

interface intialType {
    Cars: CarType[],
    loading: boolean,
    error: string | null
}


const initialState:intialType = {
    Cars: [],
    loading: true,
    error: null
}

const Slice = createSlice({
    name: 'Cars',
    initialState: initialState,
    reducers: {
        allCars: (state, action) => {
            state.loading = false
            state.Cars = action.payload
            state.error = null
        }
    }
})

export const { allCars } = Slice.actions
export default Slice.reducer