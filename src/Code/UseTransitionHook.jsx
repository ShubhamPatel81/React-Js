import React, { useState } from "react";

function UseTransitionHook() {
  const [pending, setPending] = useState(false);

  // using state for transition
  const handleButton = async () => {
    setPending(true);
    // setTimeout(() => {
    //   setPending(false);
    // }, 2000);

    await new Promise((res) => setTimeout(res, 2000));
    setPending(false);
  };

  const [pendingTransition, startTransition] = React.useTransition();
  // without using state for transition
  const handleTransition = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };

  return (
    <div>
      <h1>This Page is useTransactionHook </h1>
      <button disabled={pending} onClick={handleButton}>
        Click
      </button>
      <br />
      <br />
      <h1>Without Using State </h1>
      {pendingTransition ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
          alt=""
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        "No Image"
      )}
      <button disabled={pendingTransition} onClick={handleTransition}>
        Click
      </button>
    </div>
  );
}

export default UseTransitionHook;
