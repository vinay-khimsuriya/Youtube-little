import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../Utility/videoIdSlice";

const appStore = configureStore({
  reducer: {
    videoId: videoReducer,
  },
});

export default appStore;
