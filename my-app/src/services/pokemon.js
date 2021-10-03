import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ['Get', 'Post'],
  endpoints: (build) => ({
    getPokemonByName: build.query({
      query: () => `buildings/readAllBuildings`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi