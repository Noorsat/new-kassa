import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const basketsSlice = createSlice({
    name: 'baskets',
    initialState,
    reducers: {
        toggleBasket: (state = initialState, { payload }) => {
            const isExists = state.some(ticket => ticket.id === payload.id)

            if (isExists){
                const index = state.findIndex(ticket => ticket.id === payload.id)

                if (index !== -1){
                    state.splice(index, 1)
                }
            }else{
                state.push(payload) 
            }
        }
    }
})

export const { actions, reducer } = basketsSlice