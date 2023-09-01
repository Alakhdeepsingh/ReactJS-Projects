import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { CONGRATS_PAGE, QUESTIONS_PAGE } from "../../Constant";
import { setPageNumber } from "../../redux/slices/pageNumberSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { setAnsweredCorrectly } from "../../redux/slices/answeredCorrectlySlice";
import { selectStore } from "../../loadingSelector";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const store = useSelector(selectStore);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentQuizData = store.quizData;
    if (currentQuizData && currentQuizData.length > 0) {
      const currentQuestion = currentQuizData[currentQuestionIndex];
      if (currentQuestion && Array.isArray(currentQuestion.incorrect_answers)) {
        const allOptions = [
          currentQuestion.correct_answer,
          ...currentQuestion.incorrect_answers,
        ];

        const temp = shuffleOptions(allOptions);
        setShuffledOptions(temp);
      }
    }
  }, [currentQuestionIndex, store.quizData]);

  const shuffleOptions = (array) => {
    const shuffledArray = [...array]; // Create a copy of the original array to avoid mutating it directly
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const nextquestion = (e) => {
    e.preventDefault();

    if (currentQuestionIndex < store.quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (currentQuestionIndex === store.quizData.length - 1) {
      // Dispatch action to update answeredCorrectly before navigating to congrats page
      dispatch(setPageNumber(CONGRATS_PAGE));
      setCurrentQuestionIndex(0); // Reset question index
    }
  };

  const handleAnswerClick = (answer) => {
    const correctAnswer = store.quizData[currentQuestionIndex].correct_answer;
    const userAnsweredCorrectly = answer === correctAnswer;

    // Update answeredCorrectly based on user's answer
    dispatch(setAnsweredCorrectly(userAnsweredCorrectly ? 1 : 0));

    if (currentQuestionIndex < store.quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      dispatch(setPageNumber(CONGRATS_PAGE));
      setCurrentQuestionIndex(0); // Reset question index
    }
  };

  return (
    store.quizData &&
    store.loading === false &&
    store.pageNumber === QUESTIONS_PAGE && (
      <main>
        <section className="quiz">
          <p className="correct-answers">
            correct answers : {store.answeredCorrectly}/{currentQuestionIndex}
          </p>
          <article className="container">
            <h2
              className="middle"
              dangerouslySetInnerHTML={{
                __html: store.quizData[currentQuestionIndex]
                  ? store.quizData[currentQuestionIndex].question
                  : "",
              }}
            ></h2>
            <div className="btn-container">
              {shuffledOptions.map((answer, index) => (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={(e) => {
                    handleAnswerClick(answer);
                  }}
                >
                  {answer}
                </button>
              ))}
            </div>
          </article>
          {currentQuestionIndex !== store.quizData.length && (
            <button
              type="submit"
              className="next-question"
              onClick={(e) => nextquestion(e)}
            >
              Next Question
            </button>
          )}
        </section>
      </main>
    )
  );
};

export default Quiz;
