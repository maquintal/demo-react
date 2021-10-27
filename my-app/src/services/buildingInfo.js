import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const buildingInfoApi = createApi({
  reducerPath: 'buildingInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ['updateBuildingInfo' /*, 'updateAppartments' */],
  endpoints: (build) => ({
    getAllBuildings: build.query({
      query: () => `buildings/readAllBuildings`,
      providesTags: ['updateBuildingInfo' /*, 'updateAppartments' */],
    }),
    updateBuildingInfo: build.mutation({
      query(data) {

        const { ...body } = data

        return {
          url: `buildings/updateOneBuildingInfo`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['updateBuildingInfo' /*, 'updateAppartments' */]
    }),
    updateAppartments: build.mutation({
      query(data) {

        const { ...body } = data
        console.log(body)

        return {
          url: `appartments/updateManyAppartments`,
          method: 'POST',
          body,
        }
      },
      // invalidatesTags: ['updateAppartments']
      // invalidatesTags: ['updateBuildingInfo', 'updateAppartments']
      invalidatesTags: ['updateBuildingInfo']
    }),
  }),
})

export const {
  useGetAllBuildingsQuery,
  useUpdateBuildingInfoMutation,
  useUpdateAppartmentsMutation
} = buildingInfoApi