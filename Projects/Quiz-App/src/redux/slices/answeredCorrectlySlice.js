import { createSlice } from "@reduxjs/toolkit";

const answeredCorrectlySlice = createSlice({
  name: "answeredCorrectly",
  initialState: 0,
  reducers: {
    setAnsweredCorrectly: (state, action) => {
      return state + action.payload;
    },
    clearAnsweredCorrectly: (state, action) => {
      return 0;
    },
  },
});

export const { setAnsweredCorrectly, clearAnsweredCorrectly } =
  answeredCorrectlySlice.actions;
export default answeredCorrectlySlice.reducer;
