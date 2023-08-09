import { api } from "./api"; 

const scheduleApi = api.injectEndpoints({
    endpoints: builder => ({
        getSchedule: builder.query({
            query: (dateFrom) => ({
                url: `/schedule?skip=0&limit=0&date_from=${dateFrom}&sort=movie.created_at:desc&sort=seance.timeframe.start:asc`,
                method: 'GET',
            }),
            providesTags:() => [{
                type: 'Schedule'
            }]
        })
    })
})

export const { useGetScheduleQuery } = scheduleApi