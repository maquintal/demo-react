import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
  name: "root",
  initialState: {
    demo: {
      civicNumber: "334",
      city: "St-Amable",
      street: "Monseigneur-Coderre",
    },
    buildings: []
  },
  reducers: {
    // chooseCivicNumber: (state, action) => { state.civicNumber = action.payload },
    setFormDemo: (state, action) => { state.demo = action.payload },
    getBuildings: (state, action) => {state.buildings =  action.payload}
  }
})

export const reducer = rootSlice.reducer;

export const { setFormDemo, getBuildings } = rootSlice.actions