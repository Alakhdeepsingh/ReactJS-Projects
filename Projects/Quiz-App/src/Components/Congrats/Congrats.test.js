import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Congrats from "./index";
import { Provider } from "react-redux";
import store from "../../redux/store";
import React from "react";
import { setPageNumber } from "../../redux/slices/pageNumberSlice";
import { CONGRATS_PAGE } from "../../Constant";

import mockQuizData from "../../mocks/mockQuizData";
import { setQuizData } from "../../redux/slices/quizDataSlice";
import { setAnsweredCorrectly } from "../../redux/slices/answeredCorrectlySlice";

const renderwithprovider = (Component) =>
  render(<Provider store={store}>{Component}</Provider>);

describe("correct written text", () => {
  it("check text is correct", () => {
    // renderwithprovider(Congrats);
    render(
      <Provider store={store}>
        <Congrats />
      </Provider>
    );
    act(() => {
      store.dispatch(setPageNumber(CONGRATS_PAGE));
      //isme hamm action mai store ko bhejh rahe hai page number.
    });
    const congratsButton = screen.getByText(/Play Again/i);
    expect(congratsButton).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});

describe("Congrats Component", () => {
  it("Displays a valid percentage", async () => {
    // Mock the store data for the test
    await act(async () => {
      await store.dispatch(
        setPageNumber(CONGRATS_PAGE),
        setQuizData(mockQuizData),
        setAnsweredCorrectly(5)
      );
    });
    render(
      <Provider store={store}>
        <Congrats />
      </Provider>
    );

    // Dispatch the necessary action to set the page number

    const congratsMessage = await screen.findByTestId("congrats-message"); // Add test ID to the relevant element in your component

    // Extract the percentage value from the congrats message
    // const percentageRegex = /(\d+(\.\d+)?)%/;
    // const matches = congratsMessage.textContent.match(percentageRegex);
    // const displayedPercentage = matches ? parseFloat(matches[1]) : NaN;
    console.log(congratsMessage.textContent);
    const correctAnswers = congratsMessage.textContent.includes(0);
    expect(correctAnswers).toBeTruthy();
  });
});
