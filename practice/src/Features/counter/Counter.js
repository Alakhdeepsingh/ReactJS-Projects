import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => {
    //state by default aati hai yaha kisi function call se nhi aarahi hai
    return state.counter.count;
  });
  const themeTextColor = useSelector((state) => state.theme.color);
  const dispatch = useDispatch();
  //   console.log(count);
  return (
    <div>
      <button
        className="button"
        arial-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>

      <span className="value" style={{ color: themeTextColor }}>
        : {count}
      </span>

      <button
        className="button"
        arial-label="Increment value"
        onClick={function a() {
          dispatch(decrement());
        }}
      >
        -
      </button>

      <button
        className="button"
        arial-label="Increment value"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        Increment by 10
      </button>
    </div>
  );
};

export default Counter;
