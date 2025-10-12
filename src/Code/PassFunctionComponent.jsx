import React from "react";

function PassFunctionComponent() {
  const displayName = (name) => {
    alert(`Hello, ${name}!`);
  };

  // It is same as we are passing props in component
  return (
    <div>
      <h1>Pass Component Function Page</h1>
      <button onClick={() => displayName("Shubham")}> Click </button>
    </div>
  );
}

export default PassFunctionComponent;
