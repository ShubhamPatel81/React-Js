import React, { useState } from "react";

function RadioAndSelect() {
  const [gender, setGender] = useState("female");
  const [city, setCity] = useState("Delhi");
  const onSelect = (e) => {
    console.log(e.target.value, e.target.radio);
  };


  return (
    <div>
      <h1>Select Gender: </h1>
      <input onChange={(event)=>{setGender(event.target.value)}} type="radio" value={"male"} name="gender" id="male" checked={gender=='male'}/>
      Male <br />
      <br />
      <input onChange={(event)=>{setGender(event.target.value)}} type="radio" value={"female"} name="gender" id="female" checked={gender == 'female'} /> Female <br />
      <br />
      <h2> Selected Gender is : {gender}</h2>

      <h1>Select City: </h1>
      <select onChange={(even)=>setCity(even.target.value)} defaultValue={"Delhi"} name="city" id="city">
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
      </select>
      <h3>Selected City: {city}</h3>
    </div>
  );
}

export default RadioAndSelect;
