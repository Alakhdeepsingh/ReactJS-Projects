import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { CONGRATS_PAGE } from "../../Constant";

const Quiz = (props) => {
  const { quizData, loading } = props;
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const reset = () => {
    setQuizCompleted(false);
  };
  useEffect(() => {
    // Reset shuffledOptions whenever quizData changes (start the quiz again)
    if (quizData && quizData.length > 0) {
      const currentQuestion = quizData[currentQuestionIndex];
      const allOptions = [
        currentQuestion.correct_answer,
        ...currentQuestion.incorrect_answers,
      ];

      const temp = shuffleOptions(allOptions);
      setShuffledOptions(temp);
    }
  }, [quizData, currentQuestionIndex, setShuffledOptions]);

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

  const startQuiz = (e) => {
    e.preventDefault();

    // setCurrentQuestionIndex(0);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (currentQuestionIndex === quizData.length - 1) {
      setQuizCompleted(true);
      props.setPageNumber(CONGRATS_PAGE);
    }
    reset();
  };

  const handleAnswerClick = (answer) => {
    const correctAnswer = quizData[currentQuestionIndex].correct_answer;
    const userAnsweredCorrectly = answer === correctAnswer;

    if (currentQuestionIndex < quizData.length - 1 && !userAnsweredCorrectly) {
      props.setAnsweredCorrectly((prev) => prev);
    } else if (userAnsweredCorrectly) {
      props.setAnsweredCorrectly((prev) => prev + 1);
    }

    setCurrentQuestionIndex((prev) => prev + 1);
    if (currentQuestionIndex === quizData.length - 1) {
      setQuizCompleted(true);
      props.setPageNumber(CONGRATS_PAGE);
      setCurrentQuestionIndex(0);
      // props.setAnsweredCorrectly(0);
    }
  };
  return (
    !loading &&
    quizData &&
    props.loading === false &&
    props.isShowing && (
      <main>
        {/* <div className="modal-container">
          <div className="modal-content"></div>
        </div> */}
        <section className="quiz">
          <p className="correct-answers">
            correct answers : {props.answeredCorrectly}/{currentQuestionIndex}
          </p>
          <article className="container">
            <h2
              className="middle"
              dangerouslySetInnerHTML={{
                __html: quizData[currentQuestionIndex]
                  ? quizData[currentQuestionIndex].question
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
          {currentQuestionIndex !== quizData.length && (
            <button
              type="submit"
              className="next-question"
              onClick={(e) => startQuiz(e)}
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
