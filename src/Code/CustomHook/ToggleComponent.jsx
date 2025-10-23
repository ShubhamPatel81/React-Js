import useToggle from './useToggle';

function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);
  
  return (
    <div>
      <h2>Custom Toggle Hook Demo</h2>
      <p>Current value: {value.toString()}</p>
      <button onClick={toggleValue}>Toggle</button>
    </div>
  );
}

export default ToggleComponent;