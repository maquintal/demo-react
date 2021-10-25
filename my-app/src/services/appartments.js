import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const appartmentsApi = createApi({
  reducerPath: 'appartmentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ['updateAppartments'],
  endpoints: (build) => ({
    // getAllBuildings: build.query({
    //   query: () => `appartments/toBeCreate...`,
    //   providesTags: ['updateAppartments'],
    // }),
    updateAppartments: build.mutation({
      query(data) {

        const { ...body } = data
        console.log(body)

        return {
          url: `buildings/updateManyAppartments`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['updateAppartments']
    }),
  }),
})

export const { /* useGetAllBuildingsQuery, */ useUpdateAppartmentsMutation } = appartmentsApi