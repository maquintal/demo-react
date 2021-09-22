import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
  name: "root",
  initialState: {
    demo: {
      civicNumber: "",
      city: "",
      street: "",
    }
  },
  reducers: {
    // chooseCivicNumber: (state, action) => { state.civicNumber = action.payload },
    setForm: (state, action) => { state.demo = action.payload },
  }
})

export const reducer = rootSlice.reducer;

export const { setForm } = rootSlice.actions