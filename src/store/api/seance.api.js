import { api } from "./api";

const seanceApi = api.injectEndpoints({
    endpoints: builder => ({
        getSeanceInfo: builder.query({ 
            query: (seanceId) => ({
                url: `/schedule/seance/${seanceId}`,
                method: 'GET' 
            })
        }),
        getSeancePlan: builder.query({
            query: (seanceId) => ({
                url: `/seance/${seanceId}/plan`,
                method: 'GET'
            })
        }),
        getSeanceStatus: builder.query({
            query: (seanceId) => ({
                url: `/seance/${seanceId}/seat/status`,
                method: 'GET'
            })
        }),
    })
})

export const { useGetSeanceInfoQuery, useGetSeancePlanQuery, useGetSeanceStatusQuery } = seanceApi