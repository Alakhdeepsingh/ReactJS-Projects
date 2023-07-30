import React from "react";
import "./question.css";
import { useState } from "react";
import { Oval } from "react-loader-spinner";

const Question = (props) => {
  const { loading, handleLoading, setQuizData, isShowing, setPageNumber } =
    props;
  const [inputValue, setinputValue] = useState("10");
  const [category, setCategory] = useState("21");
  const [difficulty, setDifficulty] = useState("easy");
  const [error, setError] = useState(false);

  // console.log(category);
  // console.log(difficulty);

  const startQuiz = (e) => {
    e.preventDefault();
    //this will help us from not reloading page again and again
    handleLoading(true);
    fetchData();
    // console.log(e);
    setPageNumber(2);
  };
  console.log(loading);

  const fetchData = async () => {
    try {
      handleLoading(true);
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${inputValue}&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      const data = await response.json();
      if (data.results.length < 1) {
        setError("Can't Generate Questions, Please Try Different Options");
        setPageNumber(1);
      }
      setQuizData(data.results);
      handleLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      handleLoading(false);
    }
  };

  function handleInputChange(e) {
    setinputValue(e.target.value);
    console.log(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleDifficultyChange(e) {
    setDifficulty(e.target.value);
  }

  return loading ? (
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
    isShowing && (
      <div className="App">
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
                >
                  <option value="21">Sports</option>
                  <option value="23">History</option>
                  <option value="24">Politics</option>
                </select>
              </div>
              <div className="form-control">
                <label>Select Difficulty</label>
                <select
                  name="category"
                  id="category"
                  className="form-input"
                  onChange={handleDifficultyChange}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
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
