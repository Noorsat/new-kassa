import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const basketsSlice = createSlice({
    name: 'baskets',
    initialState,
    reducers: {
        toggleBasket: (state = initialState, { payload }) => {
            const isExists = state.some(ticket => ticket.seat.id === payload.seat.id)

            if (isExists){
                const index = state.findIndex(ticket =>  ticket.seat.id === payload.seat.id)

                if (index !== -1){
                    state.splice(index, 1)
                }
            }else{
                state.push(payload) 
            }
        },
        clearBasket: (state = initialState) => {
            return state = []
        }
    }
})

export const { actions, reducer } = basketsSlice