import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counter/counterSlice";
import themeReducer from "../Features/theme/themeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});
export default store;
// reducers: {
//   increment: (state) => {
//     state.count += 1;
//   },
//   decrement: (state) => {
//     state.count -= 1;
//   },
//   incrementByAmount: (state, action) => {
//     state.count += action.payload;
//   },
// },
