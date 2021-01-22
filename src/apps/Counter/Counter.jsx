import React,{ useState } from 'react';
import './Counter.css';

function App() {
  const [ count, setCount ] = useState(0);

  const Increment = () => {
    setCount(count + 1)
  };  

  const Decrement = () => {
    setCount(count - 1)
  };

  return (
    <div className="container">
      <div className="counter">
        <div className="counter-button">
          <button onClick={Decrement}>-</button>
        </div>
        <div className="count">
          <h1> {count} </h1>
        </div>
        <div className="counter-button">
          <button onClick={Increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;


