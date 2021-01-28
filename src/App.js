import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const App = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    try {
      const res = await fetch('/.netlify/functions/getText');
      const Messages = await res.json();
      console.log(Messages);
      setMessages(Messages);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadMessages();
  }, [])

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
      <div>
        {messages.map((msg) => {
          return (
            <p> {msg.text} </p>
          )
        })}
      </div>
    </div>
  )
}

export default App;
