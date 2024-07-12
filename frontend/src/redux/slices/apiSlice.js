import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allSongs: null,
}

export const apiSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ChangeAllSongs: (state, action) => {
      state.allSongs = action.payload
    },
  },
})

export const { ChangeAllSongs } = apiSlice.actions

export default apiSlice.reducer