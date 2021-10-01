import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `buildings/readAllBuildings`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi