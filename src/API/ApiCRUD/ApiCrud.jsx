import React, { use } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ApiCrud() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const getDate = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3000/users/");
    const data = await response.json();
    // console.log(data);
    setData(data);
    setLoading(false);
  };

  const addData = () => {
    navigate("/apicrud/add");
  };

  const deteleUser = async (id) => {
    console.log(id);

    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    if (data) {
      alert("User deleted successfully!");
      getDate();
    }
  };

  return (
    <div>
      <h2>This is the CRUD API Testing</h2>
      <button onClick={getDate}>Get Data</button>
      <button onClick={addData}>Add Data</button>

      <ul>
        <li>Id</li>
        <li>Name</li>
        <li>Email</li>
        <li>Age</li>
        <li>Action</li>
      </ul>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <ul>
              <li>{item.id}</li>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.age}</li>
              <li>
                <button>Edit</button>
                <button onClick={() => deteleUser(item.id)}>Delete</button>
              </li>
            </ul>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiCrud;
