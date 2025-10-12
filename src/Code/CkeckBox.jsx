import React from "react";

export default function CkeckBox() {
  const [Skills, setSkills] = React.useState([]);

  const handleSkills = (event)=>{
    console.log(event.target.value, event.target.checked);
    if(event.target.checked){
      setSkills([...Skills,event.target.value])
    }else{
      setSkills([...Skills.filter((skill)=>skill!==event.target.value)])
    }

  }

  return (
    <>
      <div>
        <h1>This is CheckBox page</h1>
        <h3>Select Your Skills</h3>
        <input onChange={handleSkills} type="checkbox" id="html" name="html" value="HTML" />
        <label htmlFor="html"> HTML</label>
        <br /> <br />
        <input onChange={handleSkills} type="checkbox" id="css" name="css" value="CSS" />
        <label htmlFor="css"> CSS</label>
        <br /> <br />
        <input onChange={handleSkills} type="checkbox" id="js" name="js" value="JavaScript" />
        <label htmlFor="js"> JavaScript</label>
        <br /> <br />
        <input onChange={handleSkills} type="checkbox" id="react" name="react" value="React" />
        <label htmlFor="react"> React</label>
        <br /> <br />
        <input onChange={handleSkills} type="checkbox" id="node" name="node" value="Node.js" />
        <label htmlFor="node"> Node.js</label>
        <br />
      </div>
      <h1>{Skills.toString()}</h1>
    </>
  );
}
