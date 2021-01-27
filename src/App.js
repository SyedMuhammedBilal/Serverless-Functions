import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const App = () => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(text === '') return;

    await Axios('/.netlify/functions/addText', { text })

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
