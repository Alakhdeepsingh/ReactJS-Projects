import React from "react";
import "./congrats.css";

const Congrats = (props) => {
  const startQuiz = (e) => {
    e.preventDefault();
    props.setPageNumber(1); // Move back to the first question
  };

  const calculatePercentage = () => {
    const totalQuestions = props.quizData.length;
    const correctAnswers = props.answeredCorrectly;
    const percentage = (correctAnswers / totalQuestions) * 100;
    return parseFloat(percentage).toFixed(0); // Display percentage with two decimal places
  };

  return (
    props.isShowing &&
    props.quizData && ( // Add check for quizData
      <div className="modal-content">
        <h2 className="okk">Congrats!</h2>
        <p className="hello">
          You answered {calculatePercentage()}% of questions correctly
        </p>
        <button type="submit" className="close-btn" onClick={startQuiz}>
          Play Again
        </button>
      </div>
    )
  );
};

export default Congrats;
