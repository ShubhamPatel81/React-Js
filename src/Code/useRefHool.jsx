import React, { useRef } from "react";
//use to access a DOM element directly and control it
function UseRefHook() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    console.log(inputRef);
  };

  return (
    <div>
      <h2>This is useRef Hook Page</h2>

      <input ref={inputRef} type="text" placeholder="Enter User Name:" />
      <button onClick={handleFocus}>Focus on input field</button>
    </div>
  );
}

export default UseRefHook;
