import React from "react";
import "./Button.css";
function Button({ text, onClick, OrangeButton, increasesize }) {
  let classes = "component-button";

  if (OrangeButton) {
    classes = classes + " orange";
  }
  if (increasesize) {
    classes = classes + " wide";
  }

  return (
    <div className={classes} onClick={onClick}>
      <button>{text}</button>
    </div>
  );
}

export default Button;
