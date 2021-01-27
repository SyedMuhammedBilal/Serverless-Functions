import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const App = () => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { text };
    try {
      const res = await fetch('/.netlify/functions/addText', {
        method: 'POST',
        body : JSON.stringify(body)
      })
      setText('')
    } catch (error) {
      console.log(error)
    }

    setText('')
  }


  return (
    <div>
      <h1>Text Messages</h1>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} type='text' />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default App;
