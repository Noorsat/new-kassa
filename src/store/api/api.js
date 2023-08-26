import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Basket', 'Schedule', 'Seance'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8090/api',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTI0MTY5MjksInVzZXJfaWQiOiI2M2MwZWNmZWY0MjY5ZDE1MDAzMzAzOGYiLCJsb2dpbiI6Im1hbmFnZXIiLCJyb2xlIjoibWFuYWdlciIsIm5hbWUiOiJKb2huIFdpY2siLCJjdXN0b21fY2xhaW1zIjp7ImRldmljZV9pZCI6IjYyZmY3MGY5MDZhZDc5ZTdiY2I5ZmUzYiJ9LCJpYXQiOjE2OTI0MTY5MjksImV4cCI6MTY5MjUwMzMyOX0.7hthMKGCOmIVgELDu0UhlpWOuG0u4LRW7tEUkB-kh_A'
        }
    }),
    endpoints: () => ({})
})