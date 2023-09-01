import "./App.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { incNumber } from "./actions/index";
import { decNumber } from "./actions/index";
import { useDispatch } from "react-redux";

function App() {
  const myState = useSelector((state) => {
    return state.changeTheNumber;
  });
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>

      <div class="quantity">
        <a class="quantity_minus" title="Decrement">
          <span>-</span>
        </a>
        <input
          name="quantity"
          type="text"
          class="quantity__input"
          value={myState}
        />
        <a
          class="quantity__plus"
          title="Increment"
          onClick={() => dispatch(incNumber())}
        >
          <span>+</span>
        </a>
      </div>
    </div>
  );
}

export default App;
