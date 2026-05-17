import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '@/features/app/uiSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
})
