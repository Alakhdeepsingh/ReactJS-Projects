// pageNumberSlice.js
import { createSlice } from "@reduxjs/toolkit";

const pageNumberSlice = createSlice({
  name: "pageNumber",
  initialState: 1,
  reducers: {
    setPageNumber: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPageNumber } = pageNumberSlice.actions;

export default pageNumberSlice.reducer;
