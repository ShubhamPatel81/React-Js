import React, { useActionState } from "react";

function UseActionHook() {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let email = formData.get("email");
    let password = formData.get("password");

    console.log("Previous Data:", previousData);
    console.log("Form Data:", { name, email, password });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (name && email && password) {
      return { message: "Data Submited Successfully", name, email, password };
    }
    return { error: "All fields are required!", name, email, password };
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined); // initial data is undefined
  return (
    <div>
      <h1>This is UseActionHook Page</h1>
      <form action={action}>
        <input
          type="text"
          defaultValue={data?.name}
          placeholder="Enter Name"
          name="name"
        />
        <br />
        <br />
        <input
          type="email"
          defaultValue={data?.email}
          placeholder="Enter Email"
          name="email"
        />
        <br />
        <br />
        <input
          type="text"
          defaultValue={data?.password}
          name="password"
          id=""
          placeholder="Enter password"
        />
        <br />
        <br />
        <button type="submit" disabled={pending}>
          Submit
        </button>
      </form>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}

      {<h3>Name : {data?.name}</h3>}
      {<h3>Email : {data?.email}</h3>}
      {<h3>Password : {data?.password}</h3>}
    </div>
  );
}

export default UseActionHook;
