import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedDiscount: '',
    seatArray: []
}

export const seanceSlice = createSlice({
    name: 'seance',
    initialState,
    reducers: {
        selectDiscount: (state = initialState, { payload }) => {
            state.selectedDiscount = payload
        },
        setSeatArray: (state = initialState, { payload }) => {
            state.seatArray = payload
        }
    }
})

export const { actions, reducer } = seanceSlice