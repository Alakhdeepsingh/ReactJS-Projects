import "./App.css";
import Question from "./Components/Question";
import Quiz from "./Components/Quiz";
import Congrats from "./Components/Congrats";
import { useState } from "react";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(0);

  const handleLoading = (val) => {
    setLoading(val);
    return;
  };

  return (
    <div className="App">
      <Question
        loading={loading}
        handleLoading={handleLoading}
        setQuizData={setQuizData}
        isShowing={pageNumber === 1}
        setPageNumber={setPageNumber}
      />
      <Quiz
        loading={loading}
        quizData={quizData}
        isShowing={pageNumber === 2 || pageNumber === 3}
        setPageNumber={setPageNumber}
        answeredCorrectly={answeredCorrectly}
        setAnsweredCorrectly={setAnsweredCorrectly}
      />
      {pageNumber === 3 && (
        <Congrats
          answeredCorrectly={answeredCorrectly}
          setAnsweredCorrectly={setAnsweredCorrectly}
          isShowing={pageNumber === 3}
          setPageNumber={setPageNumber}
          quizData={quizData}
        />
      )}
    </div>
  );
}
export default App;
