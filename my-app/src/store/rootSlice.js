import { createSlice, current } from "@reduxjs/toolkit"

const rootSlice = createSlice({
  name: "root",
  initialState: {
    demo: {
      civicNumber: "334",
      city: "St-Amable",
      street: "Monseigneur-Coderre",
    },
    buildings: [],
    selectedBuilding: {},
    appartments: [],
    selectedAppartments: {},
  },
  reducers: {
    setFormDemo: (state, action) => { state.demo = action.payload },
    getBuildings: (state, action) => {state.buildings = action.payload},
    setSelectedBuilding: (state, action) => { state.selectedBuilding = action.payload },
    setSelectedBuildingBuildingInfo: (state, action) => { state.selectedBuilding.buildingInfo = action.payload },
    addAppartmentToBuilding: (state, action) => {state.selectedBuilding.appartments = action.payload}
  }
})

export const reducer = rootSlice.reducer;

export const {
  setFormDemo,
  getBuildings,
  setSelectedBuilding,
  setSelectedBuildingBuildingInfo,
  addAppartmentToBuilding,
} = rootSlice.actions
