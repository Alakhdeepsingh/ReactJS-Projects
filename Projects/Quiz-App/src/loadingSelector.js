import { createSelector } from "reselect";

// Selectors
export const loading = (state) => state.loading;
export const pageNumber = (state) => state.pageNumber;
export const answeredCorrectly = (state) => state.answeredCorrectly;
export const quizData = (state) => state.quizData;

export const selectStore = createSelector(
  [loading, pageNumber, answeredCorrectly, quizData],
  (loading, pageNumber, answeredCorrectly, quizData) => {
    return {
      loading,
      pageNumber,
      answeredCorrectly,
      quizData,
    };
  }
);
