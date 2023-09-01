/* useReducer */
// The useReducer hook is a fundamental and powerful tool in React, which is used to manage complex state logic in functional components. It serves as an alternative to the more commonly used useState hook, especially when the state management involves intricate transitions and actions.

// In simpler terms, the useReducer hook helps you manage state in a way that closely resembles how you'd manage state using a traditional Redux store. It is particularly useful when your component's state transitions involve multiple actions and you want to encapsulate the logic for those transitions in a more organized and maintainable manner.
import React from "react";

const index = () => {
  const reducer = (state, action) => {
    if (action.type == "INC") {
      return state + 2;
    } else if (action.type == "DEC") {
      return state - 2;
    } else if (action.type == "MUL") {
      return state * 2;
    }
    return state;
  };
};

export default index;
