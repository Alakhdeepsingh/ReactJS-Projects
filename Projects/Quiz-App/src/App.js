import "./App.css";
import Question from "./Components/Questions";
import Quiz from "./Components/Quiz";
import Congrats from "./Components/Congrats";
import { useSelector } from "react-redux/es/hooks/useSelector";
const App = () => {
  const answeredCorrectly = useSelector((state) => state.answeredCorrectly);
  console.log(answeredCorrectly);
  return (
    <div className="App">
      <Question />
      <Quiz />
      <Congrats />
    </div>
  );
};

export default App;
