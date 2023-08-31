import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { reducer as basketReducer } from "./basket/basket.slice";
import { reducer as seanceReducer } from "./seance/seance.slice";

const reducers = combineReducers({
    basket : basketReducer,
    seance : seanceReducer,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),   
})