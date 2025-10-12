// Remove side effect in component
//  Remoce side effect out of component
// Use for fech data, direct DOM manipulation, timers, logging
// 1. import useEffect
// 2. call useEffect in component
// 3. define side effect function in useEffect
// 4. define dependencies array

import React, { use, useEffect } from "react";

function UseEffectHooK() {
  const [counter, setCounter] = React.useState(0);
  const [data, setData] = React.useState(0);

  function callOnce() {
    console.log("I am called once"); // This function is called all time as the click on button to secure that we can use useEffect
  }

  function counterChanged() {
    console.log("Counter changed", counter);
  }

  // counterChanged();
  callOnce();

  useEffect(() => {
    // callOnce();
    counterChanged();
  }, [counter]); // if we want to call only once we can use empty array [] as dependencies array

  return (
    <div>
      <h1>UseEffect Example</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Count = {counter}
      </button>
      <button
        onClick={() => {
          setData(data - 1);
        }}
      >
        data = {data}
      </button>
    </div>
  );
}

export default UseEffectHooK;
