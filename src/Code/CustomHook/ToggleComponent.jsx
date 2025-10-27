import useToggle from "./useToggle";

function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);
  console.log(value);
  return (
    <div>
      <h2>Custom Toggle Hook Demo</h2>
      <p>Current value: {value.toString()}</p>
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={() => toggleValue(false)}>Hide Heading</button>
      <button onClick={() => toggleValue(false)}>Show Heading</button>
      {value ? <h1>Custom Hooks in Reach Shown </h1> : null}
    </div>
  );
}

export default ToggleComponent;
