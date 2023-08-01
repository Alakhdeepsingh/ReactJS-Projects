import React, { useState } from "react";
import "./style.css";
import { Oval } from "react-loader-spinner";
import {
  CATEGORY_OPTIONS,
  DIFFICULTY_OPTIONS,
  DEFAULT_INPUT,
} from "../../Constant";
import { QUIZ_PAGE, QUESTIONS_PAGE } from "../../Constant";
const Question = (props) => {
  // Destructuring props to extract necessary values
  const {
    loading,
    handleLoading,
    setQuizData,
    isShowing,
    setPageNumber,
    setAnsweredCorrectly,
  } = props;

  // State variables to store user inputs and manage error state
  const [error, setError] = useState(false);
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0].label);
  const [difficulty, setDifficulty] = useState(DIFFICULTY_OPTIONS[0]);
  const [inputValue, setinputValue] = useState(DEFAULT_INPUT);

  // Function to handle the form submission and fetch quiz data
  const startQuiz = (e) => {
    e.preventDefault();
    // Setting loading state to true to show the loader while fetching data
    handleLoading(true);
    setAnsweredCorrectly(0);
    setQuizData(null);
    fetchData(); // Fetch quiz data from API
    setPageNumber(QUESTIONS_PAGE); // Move to the next page of the quiz((
    setError(false);
  };

  // Function to fetch quiz data from the API
  const fetchData = async () => {
    try {
      handleLoading(true);

      // Set loading state to true before starting the fetch
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${inputValue}&category=${CATEGORY_OPTIONS[0].value}&difficulty=${difficulty}&type=multiple`
      );
      const data = await response.json();

      // If no questions were returned from the API, show an error and go back to the setup page
      if (data.results.length < 1) {
        setError("Can't Generate Questions, Please Try Different Options");
        setPageNumber(QUIZ_PAGE);
        setCategory(category);
        setDifficulty(difficulty);
      }
      setQuizData(data.results); // Update the quiz data in the parent component
      handleLoading(false); // Set loading state to false after fetching data
    } catch (error) {
      console.error("Error fetching data:", error);
      handleLoading(false); // Set loading state to false in case of an error
    }
  };

  // Function to handle changes in the number of questions input field
  const handleInputChange = (e) => {
    setinputValue(e.target.value); // Update the inputValue state with the new value
  };

  // Function to handle changes in the category selection dropdown
  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // Update the category state with the selected value
  };

  // Function to handle changes in the difficulty selection dropdown
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value); // Update the difficulty state with the selected value
  };

  // Render the component conditionally based on the loading state and isShowing flag
  return loading ? (
    // Show the loader while fetching data
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
    // Show the setup form if data is not loading and isShowing is true
    isShowing && (
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
                  defaultValue={category}
                >
                  {CATEGORY_OPTIONS.map(function a(option) {
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>;
                  })}
                  ;
                  {/* export const CATEGORY_OPTIONS = [
                      { value: "21", label: "sports" },
                      { value: "23", label: "history" },
                      { value: "24", label: "politics" },
                  ]; */}
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
