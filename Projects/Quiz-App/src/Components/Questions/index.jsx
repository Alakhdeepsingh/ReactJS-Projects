import React, { useState } from "react";
import "./style.css";
import { Oval } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { setPageNumber } from "../../redux/slices/pageNumberSlice";
import { setLoading } from "../../redux/slices/loadingSlice";
import { setQuizData } from "../../redux/slices/quizDataSlice";
import {
  CATEGORY_OPTIONS,
  DIFFICULTY_OPTIONS,
  DEFAULT_INPUT,
} from "../../Constant";
import { QUIZ_PAGE, QUESTIONS_PAGE } from "../../Constant";
import { setAnsweredCorrectly } from "../../redux/slices/answeredCorrectlySlice";
import { selectStore } from "../../loadingSelector";

const Question = () => {
  // Get the dispatch function
  const dispatch = useDispatch();
  const store3 = useSelector(selectStore);

  // State variables to store user inputs and manage error state
  const [error, setError] = useState(false);
  const [difficulty, setDifficulty] = useState(DIFFICULTY_OPTIONS[0]);
  const [inputValue, setinputValue] = useState(DEFAULT_INPUT);
  const [category, setcategory] = useState(CATEGORY_OPTIONS[0]);

  // Function to handle the form submission and fetch quiz data
  const startQuiz = (e) => {
    e.preventDefault();
    dispatch(setPageNumber(QUIZ_PAGE));
    dispatch(setLoading(true));
    dispatch(setAnsweredCorrectly(0));
    dispatch(setQuizData(null));
    fetchData(); // Fetch quiz data from API
    dispatch(setPageNumber(QUESTIONS_PAGE)); // Move to the next page of the quiz((
    setError(false);
  };

  // Function to fetch quiz data from the API
  const fetchData = async () => {
    try {
      dispatch(setLoading(true));

      // Set loading state to true before starting the fetch
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${inputValue}&category=${category.value}&difficulty=${difficulty}&type=multiple`
      );
      const data = await response.json();

      // If no questions were returned from the API, show an error and go back to the setup page
      if (data.results.length < 1) {
        setError("Can't Generate Questions, Please Try Different Options");
        dispatch(setPageNumber(QUIZ_PAGE));
        setDifficulty(difficulty);
      }

      dispatch(setQuizData(data.results));
      // Update the quiz data in the parent component
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(setLoading(false));
    }
  };

  // Function to handle changes in the number of questions input field
  const handleInputChange = (e) => {
    setinputValue(e.target.value); // Update the inputValue state with the new value
  };

  // Function to handle changes in the category selection dropdown
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;

    const newCategory = CATEGORY_OPTIONS.find(
      (option) => option.value === selectedValue
    );

    if (newCategory) {
      setcategory(newCategory);
    } else {
      // Handle the case where the selected value is not found in the CATEGORY_OPTIONS array
      console.error(`Category with value "${selectedValue}" not found.`);
    }
  };

  // Function to handle changes in the difficulty selection dropdown
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value); // Update the difficulty state with the selected value
  };

  // Render the component conditionally based on the loading state and isShowing flag
  return store3.loading ? (
    <div className="loader-container">
      <Oval
        height={80}
        width={80}
        color="#0000FF"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  ) : (
    store3.pageNumber === QUIZ_PAGE && (
      <div className="Application">
        <main className="style">
          <section className="quiz quiz-small">
            <form className="setup-form">
              <h2 className="helloworld">Setup Quiz</h2>
              <div className="form-control">
                <label>Number of Questions</label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  onChange={handleInputChange}
                  className="form-input"
                  min="1"
                  max="50"
                  value={inputValue}
                />
              </div>
              <div className="form-control">
                <label>Category</label>
                <select
                  name="category"
                  id="category"
                  className="form-input"
                  onChange={handleCategoryChange}
                  value={category.value}
                >
                  {CATEGORY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                  ;
                </select>
              </div>
              <div className="form-control">
                <label>Select Difficulty</label>
                <select
                  name="category"
                  id="category"
                  className="form-input"
                  onChange={handleDifficultyChange}
                  defaultValue={difficulty}
                >
                  {DIFFICULTY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              {error && <span style={{ color: "red" }}>{error}</span>}
              <button
                type="submit"
                className="submit-btn"
                onClick={(e) => startQuiz(e)}
              >
                Start
              </button>
            </form>
          </section>
        </main>
      </div>
    )
  );
};

export default Question;
