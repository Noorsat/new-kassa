import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    //tagTypes: ['Basket', 'Schedule'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8090/api',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTE1MjY4OTUsInVzZXJfaWQiOiI2M2MwZWNmZWY0MjY5ZDE1MDAzMzAzOGYiLCJsb2dpbiI6Im1hbmFnZXIiLCJyb2xlIjoibWFuYWdlciIsIm5hbWUiOiJKb2huIFdpY2siLCJjdXN0b21fY2xhaW1zIjp7ImRldmljZV9pZCI6IjYyZmY3MGY5MDZhZDc5ZTdiY2I5ZmUzYiJ9LCJpYXQiOjE2OTE1MjY4OTUsImV4cCI6MTY5MTYxMzI5NX0.ytgXjsNMDVixTX06C-23eetWf_RQMnHP1mpXZWHeJ9Y'
        }
    }),
    endpoints: () => ({})
})