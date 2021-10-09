import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./rootSlice"
import { setupListeners } from '@reduxjs/toolkit/query'
import { buildingInfoApi } from "../services/buildingInfo"

export const store = configureStore({
  reducer: {
    reducer,
    [buildingInfoApi.reducerPath]: buildingInfoApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(buildingInfoApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)