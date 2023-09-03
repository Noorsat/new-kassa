import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Basket', 'Schedule', 'Seance'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8090/api',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTM3MzE2OTIsImVtcGxveWVlX2lkIjoiNjNjMGVjZmVmNDI2OWQxNTAwMzMwMzhmIiwibG9naW4iOiJtYW5hZ2VyIiwicm9sZSI6Im1hbmFnZXIiLCJuYW1lIjoiSm9obiBXaWNrIiwiY3VzdG9tX2NsYWltcyI6eyJjb250cmFjdF9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSIsImRldmljZV9pZCI6IjYyZmY3MGY5MDZhZDc5ZTdiY2I5ZmUzYiJ9LCJpYXQiOjE2OTM3MzE2OTIsImV4cCI6MTY5MzgxODA5Mn0.CvoeJbp3xDRyCdRIMO2bURmCGdMjoht_bc3n9xz6xzY'
        }
    }),
    endpoints: () => ({})
})  