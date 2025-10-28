import React from "react";

function UserAdd() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [email, setEmail] = React.useState("");

  const createUser = async () => {
    console.log(name, age, email);
    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
        email: email,
      }),
    });

    let data = await response.json();
    console.log(data);

    if (response.ok && data) {
      alert("User added successfully!");
      // Clear inputs after success
      setName("");
      setAge("");
      setEmail("");
    } else {
      alert("Failed to add user.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Add new User</h1>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Name"
      />
      <br />
      <br />

      <input
        type="text"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Enter Age"
      />
      <br />
      <br />

      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter Email"
      />
      <br />
      <br />

      <button onClick={createUser}>Add New User</button>
    </div>
  );
}

export default UserAdd;
