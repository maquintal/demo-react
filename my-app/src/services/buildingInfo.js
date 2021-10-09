import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const buildingInfoApi = createApi({
  reducerPath: 'buildingInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ['updateBuildingInfo'],
  endpoints: (build) => ({
    getAllBuildings: build.query({
      query: () => `buildings/readAllBuildings`,
      providesTags: ['updateBuildingInfo'],
    }),
    updateBuildingInfo: build.mutation({
      query(data) {

        const { ...body } = data

        return {
          url: `buildings/updateOne!BuildingInfo`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['updateBuildingInfo']
    }),
  }),
})

export const { useGetAllBuildingsQuery, useUpdateBuildingInfoMutation } = buildingInfoApi