import { createSlice } from "@reduxjs/toolkit";

const quizDataSlice = createSlice({
  name: "quizData",
  initialState: "Alakhdeep ka systumm hai",
  reducers: {
    setQuizData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setQuizData } = quizDataSlice.actions;

export default quizDataSlice.reducer;
