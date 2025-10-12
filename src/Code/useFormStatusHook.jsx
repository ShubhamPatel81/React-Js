import React, { use } from "react";
import { useFormStatus } from "react-dom";
function UseFormStatusHook() {
  const handleSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      alert("Form Submitted");
      console.log("Form Submitted");
    });
  };

  const CustomerForm = () => {
    const { pending } = useFormStatus();
    return (
      <div>
        <input type="text" placeholder="Enter Name" />
        <br />
        <br />
        <input type="password" placeholder="Enter Password" />
        <br />
        <br />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
    );
  };
  return (
    <div>
      <h1>UseFormStatusHook</h1>
      <p>This is UseFormStatusHook</p>

      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </div>
  );
}

export default UseFormStatusHook;
