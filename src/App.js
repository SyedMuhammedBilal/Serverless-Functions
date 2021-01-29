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
      console.log(res);
      setText('')
    } catch (error) {
      console.log(error)
    }

    setText('')
  };


  return (
    <div>
      <h1>Text Messages</h1>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} type='text' />
        {text.length <= 0 ? <button type="submit" disabled>Send</button> : <button type="submit">Send</button>}
      </form>
      {messages.map((msg) => {
          return (
            <Text key={msg._id} messages={msg} />
          )
        })}
    </div>
  )
};

export default App;


const Text = ({messages}) => {
  const deleteMessage = async () => {
    const id = messages._id
    try {
      await fetch('/.netlify/functions/deleteText', {
        method: 'DELETE',
        body: JSON.stringify({ id })
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>   
      <div>
        <p> {messages.text} </p>
        <button onClick={deleteMessage}>...</button>
      </div>
    </div>
  )
}