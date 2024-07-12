import { configureStore } from '@reduxjs/toolkit'
import songRouter from './slices/songSlice'
import apiRouter from './slices/apiSlice'

export const store = configureStore({
  reducer: {
    songRouter: songRouter,
    apiRouter: apiRouter,
  },
})