import React from "react";
import "./style.css";
import { CONGRATS_PAGE, QUIZ_PAGE } from "../../Constant";
import { setPageNumber } from "../../redux/slices/pageNumberSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { clearAnsweredCorrectly } from "../../redux/slices/answeredCorrectlySlice";
import { selectStore } from "../../loadingSelector";

const Congrats = () => {
  const dispatch = useDispatch();
  const store2 = useSelector(selectStore);

  const playagain = (e) => {
    e.preventDefault();
    dispatch(setPageNumber(QUIZ_PAGE));
    dispatch(clearAnsweredCorrectly());
  };

  const calculatePercentage = () => {
    const totalQuestions = store2.quizData.length;
    const correctAnswers = store2.answeredCorrectly;
    const percentage = (correctAnswers / totalQuestions) * 100;

    return parseFloat(percentage).toFixed(0); // Display percentage with two decimal places
  };

  return (
    store2.pageNumber === CONGRATS_PAGE && (
      <div className="modal-content-wrapper">
        <div className="modal-content">
          <h2 className="okk">Congrats!</h2>
          <p className="hello" data-testid="congrats-message">
            You answered {calculatePercentage()}% of questions correctly
          </p>
          <button type="submit" className="close-btn" onClick={playagain}>
            Play Again
          </button>
        </div>
      </div>
    )
  );
};

export default Congrats;
