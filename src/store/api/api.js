import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    //tagTypes: ['Basket', 'Schedule'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8090/api',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTE2NjcyMDksInVzZXJfaWQiOiI2M2MwZWNmZWY0MjY5ZDE1MDAzMzAzOGYiLCJsb2dpbiI6Im1hbmFnZXIiLCJyb2xlIjoibWFuYWdlciIsIm5hbWUiOiJKb2huIFdpY2siLCJjdXN0b21fY2xhaW1zIjp7ImRldmljZV9pZCI6IjYyZmY3MGY5MDZhZDc5ZTdiY2I5ZmUzYiJ9LCJpYXQiOjE2OTE2NjcyMDksImV4cCI6MTY5MTc1MzYwOX0.Hmu6xZmk0J70umB_RsqE-aZpO9bq6BnB5W9Nnpz9CFk'
        }
    }),
    endpoints: () => ({})
})