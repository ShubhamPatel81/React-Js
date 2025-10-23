import React from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

//sending data without props using from one component to another
// Context API in React is a way to manage state globally. It can be used to share data with multiple components, without having to pass props down manually at every level of the component tree.

function ContextApi() {
  const [subject, setSubject] = React.useState("Mathematics");

  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <select
          name=""
          id=""
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ padding: 10, margin: 10 }}
        >
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>
        <button
          style={{ padding: 10, margin: 10 }}
          onClick={() => setSubject("")}
        >
          Clear Subject
        </button>

        <h2>Context API Example</h2>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}

export default ContextApi;
