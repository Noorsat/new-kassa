import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Basket', 'Schedule', 'Seance'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8090/api',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTMyODk5NTQsImVtcGxveWVlX2lkIjoiNjNjMGVjZmVmNDI2OWQxNTAwMzMwMzhmIiwibG9naW4iOiJtYW5hZ2VyIiwicm9sZSI6Im1hbmFnZXIiLCJuYW1lIjoiSm9obiBXaWNrIiwiY3VzdG9tX2NsYWltcyI6eyJjb250cmFjdF9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSIsImRldmljZV9pZCI6IjYyZmY3MGY5MDZhZDc5ZTdiY2I5ZmUzYiJ9LCJpYXQiOjE2OTMyODk5NTQsImV4cCI6MTY5MzM3NjM1NH0.s33c5mb88Gr_3k3Fum4-UomLfALMIehM1SpBp3QwFPA'
        }
    }),
    endpoints: () => ({})
})  