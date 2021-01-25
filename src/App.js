import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import axios from 'axios';

const App = () => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(text === '') return;

    await axios('/api/addText', { text })

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
