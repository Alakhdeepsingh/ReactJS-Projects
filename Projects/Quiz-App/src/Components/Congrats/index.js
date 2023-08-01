import React from "react";
import "./style.css";
import { QUIZ_PAGE } from "../../Constant";

const Congrats = (props) => {
  const startQuiz = (e) => {
    e.preventDefault();
    props.setPageNumber(QUIZ_PAGE);
  };

  const calculatePercentage = () => {
    const totalQuestions = props.quizData.length;
    const correctAnswers = props.answeredCorrectly;
    const percentage = (correctAnswers / totalQuestions) * 100;
    return parseFloat(percentage).toFixed(0); // Display percentage with two decimal places
  };

  return (
    props.isShowing && (
      <div className="modal-content-wrapper">
        <div className="modal-content">
          <h2 className="okk">Congrats!</h2>
          <p className="hello">
            You answered {calculatePercentage()}% of questions correctly
          </p>
          <button type="submit" className="close-btn" onClick={startQuiz}>
            Play Again
          </button>
        </div>
      </div>
    )
  );
};

export default Congrats;
