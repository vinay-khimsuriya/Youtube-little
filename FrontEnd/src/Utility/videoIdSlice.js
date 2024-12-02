import { createSlice } from "@reduxjs/toolkit";

const videoIdSlice = createSlice({
  name: "videoId",
  initialState: {
    id: "",
  },
  reducers: {
    updateVideoId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { updateVideoId } = videoIdSlice.actions;

export default videoIdSlice.reducer;
