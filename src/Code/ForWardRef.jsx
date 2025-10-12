import React, { use, useRef } from "react";
import UserInputForwardRef from "./UserInputForwardRef";

function ForWardRef() {
  const inputRef = useRef(null);
  const updateInput = () => {
    inputRef.current.value = "Hello, This is updated text";
    inputRef.current.style.color = "blue";
    inputRef.current.style.fontSize = "20px";
    console.log(inputRef);
  };
  return (
    <div>
      <h1>Forward Ref </h1>
      <UserInputForwardRef inputRef={inputRef} />
      <button onClick={updateInput}>Update Input</button>
    </div>
  );
}

export default ForWardRef;
