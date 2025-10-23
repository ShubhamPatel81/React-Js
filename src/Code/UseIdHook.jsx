import React, { useId } from "react";

function UseIdHook() {

  return (
    <div>
    
      <UserForm />
      <UserForm />
      <UserForm />
    </div>
  );
}

export default UseIdHook;

function UserForm() {
  const name = useId();
  const passowrd = useId();
  const email = useId();
  const skill = useId();

  return (
    <div>
      <h1>This is UseIdHook State Page (To generate Unique Id)</h1>

      <h3>{name}</h3>
      <form action="">
        <input type="text" name={name} id={name} placeholder="Enter Name" />
        <br />
        <br />
        <input type="password" name={passowrd} placeholder="Enter passowrd" />
        <br />
        <br />
        <input type="email" name={email} placeholder="Enter Email" />
        <br />
        <br />
        <select name={skill} id={skill}>
          <option value="">Select Skill</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

 
