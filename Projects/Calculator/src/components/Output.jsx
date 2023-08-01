import React from "react";
import './output.css';
function Output({ result }) {
  return (
    <div className="component-display">
      <div>{result}</div>
    </div>
  );
}

export default Output;
