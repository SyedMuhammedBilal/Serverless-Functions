import React, { useRef, useState, useEffect } from 'react'

function App() {
  const inputRef = useRef();
  const [text, setText] = useState();
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    let inputE = e.target.value

    function Encryption(value) {
      let E2E = Math.random(10 * 100 + value[1] % value[0])
      console.log(E2E)
    }

    Encryption(inputE)
    setText(
      inputE
    )
  };

  useEffect(() => {
    
  },[text])

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(
      text
    )
    setText('')
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} ref={inputRef} type="text" />
        <button type="submit">Submit</button>
      </form>
      <h3> {text} </h3>
      {/* <NextApp myText={todo} /> */}
    </React.Fragment>
  )
}

export default App

const NextApp  = ({ myText }) => {
  return (
    <div>
      <h1> {myText} </h1>
    </div>
  )
}