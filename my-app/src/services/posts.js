// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    updatePost: build.mutation({
      query(data) {
        console.log(body)
        const { ...body } = data
        return {
          url: `buildings/updateOneBuildingInfo`,
          method: 'POST',
          body,
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      // invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
    }),
  })
})

export const {
  useUpdatePostMutation,
} = postApi