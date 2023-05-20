import { createSlice } from "@reduxjs/toolkit";

const confettiInitialState = {
  showConfetti: false,
};

const confettiSlice = createSlice({
  name: "confetti",
  initialState: confettiInitialState,
  reducers: {
    showConfetti(state) {
      state.showConfetti = true;
    },
    hideConfetti(state) {
      state.showConfetti = false;
    },
  },
});

export const confettiActions = confettiSlice.actions;
export default confettiSlice.reducer;
