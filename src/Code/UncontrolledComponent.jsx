import React, { useRef } from "react";

function UncontrolledComponent() {
  const handleForm = (event) => {
    event.preventDefault();
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    alert(`User Name: ${user} and Password: ${password}`);
    console.log(user, password);
  };


  const userRef = useRef(null);
  const passwordRef = useRef(null);


const handleFormRef = (event) => {
  event.preventDefault();
  const user= userRef.current.value;
  const userPasswordRef = passwordRef.current.value;
  console.log("Handle form with useRef : User: " ,user , " Password: ", userPasswordRef);

}


  return (
    <div>
      <h1>Uncontrolled Components</h1>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter User Name:" />
        <br />
        <br />
        <input type="password" id="password" placeholder="Enter Password:" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <h1>Uncontrolled Components with useRef</h1>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input type="text" ref={userRef}  placeholder="Enter User Name:" />
        <br />
        <br />
        <input type="password"  ref={passwordRef} placeholder="Enter Password:" />
        <br />
        <br />
        <button type="submit">Submit With Ref</button>
      </form>
    </div>
  );
}

export default UncontrolledComponent;
