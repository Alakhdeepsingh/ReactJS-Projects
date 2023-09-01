// import React from "react";
// import { useState } from "react";
// import { useMemo } from "react";

// function Memo() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");

//   const expensiveCalculation = (num) => {
//     console.log("Calculating");
//     for (let i = 0; i < 10000000000; i++) {}
//     return num;
//   };
//   //   useMemo is a React hook that helps to optimize the performance of functional components by caching the result of a computation and returning the cached result when the inputs to the computation have not changed between renders. It is used to memoize expensive calculations, preventing unnecessary recalculations and rendering updates.
//   const calculation = expensiveCalculation(count);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}> Increment</button>
//       <h1>Count: {count}</h1>

//       <input onChange={(e) => setName(e.target.value)} />
//       <h1>Name: {name}</h1>
//     </div>
//   );
// }
// export default Memo;

//state update honne se rereneder bhi hoo raha hai
// abh agar count ka state update karre yaa name ka state update karee
//

import React from "react";
import { useState } from "react";
import { useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Calculating");
    for (let i = 0; i < 1000000000; i++) {}
    return num;
  };
  //   useMemo is a React hook that helps to optimize the performance of functional components by caching the result of a computation and returning the cached result when the inputs to the computation have not changed between renders. It is used to memoize expensive calculations, preventing unnecessary recalculations and rendering updates.
  const calculation = useMemo(() => expensiveCalculation(count), [name]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <h1>Count: {count}</h1>

      <input onChange={(e) => setName(e.target.value)} />
      <h1>Name: {name}</h1>
    </div>
  );
}
export default Memo;
