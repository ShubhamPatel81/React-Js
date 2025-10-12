import React from 'react'

export default function Toggle() {
  const [display, setDisplay] = React.useState(true)
  return (
    <div>
      <h1>This is toggle</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <h2>Hello Shubham</h2> : null}
      
    </div>
  )
}
