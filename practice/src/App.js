import "./App.css";
import React from "react";
// import Student1 from "./HigherOrderFunction/Student1";
// import Student2 from "./HigherOrderFunction/Student2";
import { useState, createContext, useEffect, useRef, useCallback } from "react";
import CompC from "./useContext/CompC";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import Memo from "./useMemo/Memo";
import Counter from "./Features/counter/Counter";
import Coin from "./Features/Coin/Coin";
import Theme from "./Features/theme/Theme";

import Todos from "./useCallBack/Todos";

const AppState = createContext();
// createcontext ko ekk storage ki tarah dekho

function App() {
  // const curState = useSelector((state) => state.number);
  // const dispatch = useDispatch();

  // const [data, setData] = useState("Systum");
  // const refElement = useRef("");
  // const [name, setName] = useState("Alakhdeep");

  // function reset() {
  //   setName("");
  //   refElement.current.focus();
  // }
  // function handleInput() {
  //   refElement.current.style.color = "blue";
  // }

  //useCallBack

  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount((c) => c + 1);
  // };

  // const addTodo = () => {
  //   setTodos((todos) => [...todos, "New Todo"]);
  // };

  //using usecallback in function addtodo
  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((todos) => [...todos, "New Todo"]);
  }, [todos]);

  return (
    <>
      {/* useContext */}
      {/* <AppState.Provider value={data}> */}
      {/* Some Explanation is written in CompA.js inside useContext folder so refer that also */}
      {/* basically appstate.provide ke andar jho bhi componenet ka name likhenge usse hamm data bhejh sakte hai usecontext ki help se jesse yaha parr CompC dhiya hai naa */}
      {/* <CompC /> */}
      {/* Inside AppState.Provider, you provided a value prop, which is data obtained from the useState hook in the App component. This means that any component inside the AppState.Provider tree can access the value of data. */}
      {/* The Context.Provider component is used to wrap the components that need access to the data provided by the context. It accepts a value prop that holds the data you want to share with its descendants. The descendants can then access this data using the Context.Consumer or the useContext hook. */}
      {/* AppState.Provider, ke andar koi bhi coomponent aajaye chahe vo kisi bhi component ka child hoo like abh dekha jaye CompC, CompB ka child hai and CompB , CompA ka child hai so phir bhi direct data jaa rha hai Compc mai useContext ki help se    */}
      {/* </AppState.Provider> */}

      {/* <Student1 />
        <Student2 /> */}

      {/* useRef */}
      {/* Because of these two reason we use useref  */}
      {/* Accessing DOM Elements: One of the primary reasons to use refs is to access DOM elements directly. In React, manipulating the DOM directly is generally discouraged, but there are situations where you might need to do so. Refs provide a way to get references to DOM elements and interact with them imperatively. For example, you might want to focus an input element, measure its dimensions, or trigger specific DOM-related functionality in response to certain events. By using refs, you can directly access and modify the underlying DOM elements. */}
      {/* Managing State and Avoiding Re-renders: In React, updating the state triggers a re-render of the component and its children. However, there are certain cases where you want to hold a value that triggers a change but doesn't cause a re-render. Refs can be useful for this purpose. When you use the useRef hook or the React.createRef() method, the value stored in the ref persists across re-renders without causing the component to re-render. This can be helpful when you have a value that changes but doesn't affect the UI or when you need to store a mutable value that doesn't trigger a re-render. */}

      {/* <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={handleInput}>Handle Input</button> */}

      {/* <div>
        <Memo />
      </div> */}

      {/* <div className="App">
        <Counter />
        <Coin />
        <Theme />
      </div> */}

      {/* useCallBack */}

      <div>
        Count : {count}
        <button onClick={increment}>+</button>
      </div>

      <Todos todos={todos} addTodo={addTodo} />

      {/* abh maine increment walle button mai click kiya tho hamari count walli state update hotti hai, abh jabh count walli state update hoghi jabh componenet purra rerender karta hai,  jabh bhi hamara component rerender hogha naa tho components ke andar functions dubara se banege ( chalenge) , abh hamm tho esse function koo nhi chalana chahte hai todos walla jabh count update hoye tho hamm Callback hook ka use karenge*/}
    </>
  );
}

export default App;
export { AppState };
