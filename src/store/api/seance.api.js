import { api } from "./api";

const seanceApi = api.injectEndpoints({
    endpoints: builder => ({
        getSeanceInfo: builder.query({ 
            query: (seanceId) => ({
                url: `/schedule/seance/${seanceId}`,
                method: 'GET' 
            }),
            providesTags:() => [{
                type: 'Seance'
            }]
        }),
        getSeancePlan: builder.query({
            query: (seanceId) => ({
                url: `/seance/${seanceId}/plan`,
                method: 'GET'
            }),
            providesTags:() => [{
                type: 'Seance'
            }]
        }),
        getSeanceStatus: builder.query({
            query: (seanceId) => ({
                url: `/seance/${seanceId}/seat/status`,
                method: 'GET'
            }),
            providesTags:() => [{
                type: 'Seance'
            }]
        }),
        lockSeat: builder.mutation({
            query: body => ({
                body: {
                    seats: body.seats
                },
                url: `/seance/${body.seanceId}/seat/lock`,
                method: 'POST'
            })
        })
    })
})

export const { useGetSeanceInfoQuery, useGetSeancePlanQuery, useGetSeanceStatusQuery, useLockSeatMutation } = seanceApi