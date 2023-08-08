import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Basket'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8090/api'
    }),
    endpoints: () => ({})
})