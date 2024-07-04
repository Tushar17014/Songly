import { configureStore } from '@reduxjs/toolkit'
import counterRouter from './slices/slice1'

export const store = configureStore({
  reducer: {
    counterRouter: counterRouter,
  },
})