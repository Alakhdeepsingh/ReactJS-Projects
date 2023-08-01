import "./App.css";
import Question from "./Components/Questions";
import Quiz from "./Components/Quiz";
import Congrats from "./Components/Congrats";
import { useState } from "react";
import { QUIZ_PAGE, QUESTIONS_PAGE, CONGRATS_PAGE } from "./Constant";

const App = () => {
  // State variables to manage the app's page number, quiz data, loading state, and the number of questions answered correctly
  const [pageNumber, setPageNumber] = useState(1);
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(0);

  // Function to handle loading state changes
  const handleLoading = (val) => {
    setLoading(val);
    return;
  };

  return (
    <div className="App">
      {/* Display the Question component on page 1 */}
      <Question
        loading={loading}
        handleLoading={handleLoading}
        setQuizData={setQuizData}
        isShowing={pageNumber === QUIZ_PAGE}
        setPageNumber={setPageNumber}
        answeredCorrectly={answeredCorrectly}
        setAnsweredCorrectly={setAnsweredCorrectly}
      />

      {/* Display the Quiz component on page 2 or 3 */}
      <Quiz
        loading={loading}
        quizData={quizData}
        isShowing={
          pageNumber === QUESTIONS_PAGE || pageNumber === CONGRATS_PAGE
        }
        setPageNumber={setPageNumber}
        answeredCorrectly={answeredCorrectly}
        setAnsweredCorrectly={setAnsweredCorrectly}
      />

      {/* Display the Congrats component on page 3 */}
      {pageNumber === CONGRATS_PAGE && (
        <Congrats
          answeredCorrectly={answeredCorrectly}
          setAnsweredCorrectly={setAnsweredCorrectly}
          isShowing={pageNumber === CONGRATS_PAGE}
          setPageNumber={setPageNumber}
          quizData={quizData}
          setQuizData={setQuizData}
        />
      )}
    </div>
  );
};

export default App;
