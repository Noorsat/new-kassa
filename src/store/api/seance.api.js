import { useActions } from "../../hooks/useActions";
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
        }),
        buyTicket: builder.mutation({
            query: body => ({
                body: body,
                url: `/ticket/buy`,
                method: 'POST'
            }),
            invalidatesTags:() => [{
                type: 'Seance'
            }]
        }),
        reservedTicket: builder.mutation({
            query: body => ({
                body: body,
                url: `/ticket/reserve`,
                method: 'POST'
            }),
            invalidatesTags:() => [{
                type: 'Seance'
            }]
        })
    })
})

export const { useGetSeanceInfoQuery, useGetSeancePlanQuery, useGetSeanceStatusQuery, useLockSeatMutation, useBuyTicketMutation } = seanceApi