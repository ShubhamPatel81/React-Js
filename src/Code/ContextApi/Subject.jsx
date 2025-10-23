import React, { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Subject() {
  const subject = useContext(SubjectContext);
  return (
    <div style={{ backgroundColor: "green", padding: 10 }}>
      <h2>Subject Comonent</h2>
      <h3>Subject Name: {subject}</h3>
    </div>
  );
}

export default Subject;
