import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
  name: "root",
  initialState: {
    demo: {
      civicNumber: "334",
      city: "St-Amable",
      street: "Monseigneur-Coderre",
    },
    buildings: [],
    selectedBuilding: {}
  },
  reducers: {
    // chooseCivicNumber: (state, action) => { state.civicNumber = action.payload },
    setFormDemo: (state, action) => { state.demo = action.payload },
    getBuildings: (state, action) => {state.buildings = action.payload},
    setSelectedBuilding: (state, action) => { state.selectedBuilding = action.payload },
    setSelectedBuildingBuildingInfo: (state, action) => { state.selectedBuilding.buildingInfo = action.payload },
  }
})

export const reducer = rootSlice.reducer;

export const {
  setFormDemo,
  getBuildings,
  setSelectedBuilding,
  setSelectedBuildingBuildingInfo,
} = rootSlice.actions