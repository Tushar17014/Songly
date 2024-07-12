import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  songId: null,
  playingSongPath: null,
  playingSongID: null,
  songTitle: null,
  playingSong: null,
  pauseRequest: null,
  resumeRequest: null,
}

export const songSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ChangeSongId: (state, action) => {
      state.songId = action.payload
    },
    ChangePlayingSong: (state, action) => {
      state.playingSongPath = action.payload
    },
    ChangePlayingSongID: (state, action) => {
      state.playingSongID = action.payload
    },
    ChangeSongTitle: (state, action) => {
      state.songTitle = action.payload
    },
    ChangePlayingSongObj: (state, action) => {
      state.playingSong = action.payload;
    },
    ChangePauseRequest: (state, action) => {
      state.pauseRequest = action.payload;
    },
    ChangeResumeRequest: (state, action) => {
      state.resumeRequest = action.payload;
    },
  },
})

export const { ChangeSongId, ChangePlayingSong, ChangePlayingSongID, ChangeSongTitle, ChangePlayingSongObj, ChangePauseRequest, ChangeResumeRequest } = songSlice.actions

export default songSlice.reducer