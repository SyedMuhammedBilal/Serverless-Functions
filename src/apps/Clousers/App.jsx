import React, { useState, useRef } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  countRef.current = count

  function handleAlert() {
    setTimeout(() => {
      alert(`you've clicked ${countRef.current} times`)
    }, 1000);
  }

  function handleClick() {
    setCount(count + 1)
  }

  function handleSubmit(e) {
    e.preventDefault();   
    setCount({
      
    })
  }

  return (
    <div>
      <button onClick={handleAlert}>Show Alert</button>
      <button onClick={handleClick}>Click Me</button>
      <h1> {count} </h1>
      <input type="text" value={count} placeholder="click to add count" />
      <button type="submit">Click me</button>
    </div>
  )
}

export default App
