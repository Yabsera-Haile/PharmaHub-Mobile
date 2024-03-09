import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const pharmacySlice = createSlice({
  name: 'pharmacy',
  initialState,
  reducers: {
    setPharmacy: (state, action) => {
      state.pharmacy = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPharmacy} = pharmacySlice.actions

export const selectPharmacy = (state) => state.pharmacy.pharmacy

export default pharmacySlice.reducer