import React, { useState } from "react";

const Student2 = () => {
  const [num, setNum] = useState(0);
  const handleEvent = () => {
    setNum(num + 10);
  };
  return (
    <div>
      Student1
      <h3>{num}</h3>
      <button onClick={() => handleEvent()}>Plus</button>
    </div>
  );
};

export default Student2;
