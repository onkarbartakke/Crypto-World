import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '0f1f046f26msh7b3ea3461f2f192p134872jsn6f570db77f92'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '0f1f046f26msh7b3ea3461f2f192p134872jsn6f570db77f92'
//     }
//   };


const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({

    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),

    endpoints: (builder) =>({

        getCryptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=> createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory:builder.query({
            query:({coinId, timePeriod})=> createRequest(`/coin/${coinId}/history/${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery
} = cryptoApi;