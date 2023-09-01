import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loadingSlice";
import quizDataReducer from "./slices/quizDataSlice";
import pageNumberReducer from "./slices/pageNumberSlice";
import answerCorrectlyReducer from "./slices/answeredCorrectlySlice";

const rootReducer = combineReducers({
  loading: loadingReducer,
  quizData: quizDataReducer,
  pageNumber: pageNumberReducer,
  answeredCorrectly: answerCorrectlyReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
