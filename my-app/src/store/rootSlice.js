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
    setFormDemo: (state, action) => { state.demo = action.payload },
  }
})

export const reducer = rootSlice.reducer;

export const { setFormDemo } = rootSlice.actions