import { createSlice } from "@reduxjs/toolkit";

// Define the type for the state
interface ModeState {
  value: boolean;
}

const initialState: ModeState = {
  value: true,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
