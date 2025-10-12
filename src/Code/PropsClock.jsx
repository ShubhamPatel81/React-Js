import React from 'react' 
import Clock from './Clock'

export default function PropsClock() {

  const[color, setColor] = React.useState("red")

  

  return (
    <div>
      <h1>PropsClock</h1>
      <select name="" id="" onChange={(e) => setColor(e.target.value)} value={color}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
      </select>

      <Clock color={color} />
      
    </div>
  )
}
