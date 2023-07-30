import React from "react";
import "./quiz.css";
import { useState, useEffect } from "react";

const Quiz = (props) => {
  const { quizData, loading } = props;
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function shuffleOptions(array) {
    const shuffledArray = [...array]; // Create a copy of the original array to avoid mutating it directly
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  useEffect(() => {
    if (quizCompleted) {
      return;
    }
    if (quizData && quizData.length > 0) {
      const currentQuestion = quizData[currentQuestionIndex];
      const allOptions = [
        currentQuestion.correct_answer,
        ...currentQuestion.incorrect_answers,
      ];

      const temp = shuffleOptions(allOptions);
      console.log(temp);
      setShuffledOptions(temp);
    }
  }, [quizData, currentQuestionIndex]);

  const startQuiz = (e) => {
    e.preventDefault();
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (currentQuestionIndex === quizData.length - 1) {
      setQuizCompleted(true);
      props.setPageNumber(3);
    }
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
      props.setPageNumber(3);
    }
  };
  console.log(loading);
  return (
    props.isShowing &&
    !loading &&
    !quizCompleted &&
    quizData &&
    quizData.length > 0 &&
    currentQuestionIndex < quizData.length &&
    props.loading === false && (
      <main>
        <div className="modal-container">
          <div className="modal-content"></div>
        </div>
        <section className="quiz">
          <p className="correct-answers">
            correct answers : {props.answeredCorrectly}/{currentQuestionIndex}
          </p>
          <article className="container">
            <h2
              className="middle"
              dangerouslySetInnerHTML={{
                __html: quizData[currentQuestionIndex].question,
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
