import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedDiscount: '',
    seatArray: [],
    contract: {},
    payments: []
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
        },
        loadSeance: (state = initialState, { payload }) => {
            state.contract = payload.contract;
            state.payments = payload.payments;
        }
    }
})

export const { actions, reducer } = seanceSlice