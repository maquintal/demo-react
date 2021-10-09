import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getPokemonByName: build.query({
      query: () => `buildings/readAllBuildings`,
      providesTags: ['Post'],
    }),
    updatePost: build.mutation({
      query(data) {

        const { ...body } = data

        return {
          url: `buildings/updateOneBuildingInfo`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['Post']
    }),
  }),
})

export const { useUpdatePostMutation, useGetPokemonByNameQuery } = pokemonApi