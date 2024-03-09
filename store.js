import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import pharmacySlice from './slices/pharmacySlice'

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    pharmacy:pharmacySlice,
  },
})