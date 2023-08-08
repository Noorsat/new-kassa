import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { reducer as basketReducer } from "./basket/basket.slice";

const reducers = combineReducers({
    basket : basketReducer,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),   
})