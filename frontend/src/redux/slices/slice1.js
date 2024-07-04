import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  songId: null,
  playingSongPath: 1,
  songTitle: null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ChangeSongId: (state, action) => {
      state.songId = action.payload
    },
    ChangePlayingSong: (state, action) => {
      state.playingSongPath = action.payload
    },
    ChangeSongTitle: (state, action) => {
      state.songTitle = action.payload
    },
  },
})

export const { ChangeSongId, ChangePlayingSong, ChangeSongTitle } = counterSlice.actions

export default counterSlice.reducer