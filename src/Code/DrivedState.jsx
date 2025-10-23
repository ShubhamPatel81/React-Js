import React, { useState } from "react";

// jb hm log kisi state ki variables ko kisi dusri state ki variable se set krna ho to use krte hai drived state

// State that is calculate or drived from other state values or props within your component is called drived state
function DrivedState() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleAddUsers = () => {
    setUsers([...users, user]);
    // console.log(users);
  };

  const total = users.length;

  const uniqueUsers = [...new Set(users)].length;

  const lastUser = users[users.length - 1];

  return (
    <div>
      <h1>This is Drived State Page</h1>

      <h2>Total Users : {total} </h2>
      <h2>Last User : {lastUser}</h2>
      <h2>Unique Total User : {uniqueUsers} </h2>
      <input
        type="text"
        placeholder="Add new User"
        onChange={(event) => setUser(event.target.value)}
      />
      <br />
      <br />
      <button onClick={handleAddUsers}>Add User</button>
      {users.length > 0 ? (
        <div>
          <h2>List of Users</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>No Users Found</h2>
      )}
    </div>
  );
}

export default DrivedState;
