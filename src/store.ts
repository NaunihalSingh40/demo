import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./redux/modeSlice";

export const store = configureStore({
  reducer: {
    theme: modeReducer,
  },
});

// Export RootState type
export type RootState = ReturnType<typeof store.getState>;
