import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getPokemonByName: build.query({
      query: () => `buildings/readAllBuildings`,
      // providesTags: ['Post'],
      // providesTags: (result) =>
      // result
      //   ? [
      //       { type: 'Post', id: 'LIST' },
      //       ...result.map(( { id } ) => ({ type: 'Post', id })),
      //     ]
      //   : [{ type: 'Post', id: 'LIST' }],
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
      invalidatesTags: ['Post'],
      // providesTags: ['Post'],
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      // invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
    }),
  }),
})

export const { useUpdatePostMutation, useGetPokemonByNameQuery } = pokemonApi