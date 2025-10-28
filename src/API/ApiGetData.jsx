// install json-server -g
// npm i json-server using this command


import React, { useEffect, useState } from "react";

export default function ApiGetData() {
  const [userData, setUserData] = useState([]);

  async function fetchData() {
    const apiUrl = "https://dummyjson.com/users";
    let response = await fetch(apiUrl);
    response = await response.json();
    setUserData(response.users);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        This is API Testing Page
      </h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#007BFF",
              color: "white",
            }}
          >
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              First Name
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Last Name
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Age</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {user.id}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {user.firstName}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {user.lastName}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {user.age}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
