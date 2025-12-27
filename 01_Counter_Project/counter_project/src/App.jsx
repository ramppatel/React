import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);
  
  const addValue = () => {
    if(counter < 20) setCounter(counter + 1);
  }

  const removeValue = () => {
    if(counter > 0) setCounter(counter - 1);
  }

  return (
    <div className="container">
      <h1>React Counter</h1>
      <h2>{counter}</h2>       
      
      <div className="button-group">
        <button 
          className="btn-add" 
          onClick={addValue}
          disabled={counter >= 20}
        >
          Add Value
        </button>

        <button 
          className="btn-remove" 
          onClick={removeValue}
          disabled={counter <= 0}
        >
          Remove Value
        </button>
      </div>
      
      {/* Small UI feedback for limits */}
      {counter === 20 && <p style={{color: '#ff9800'}}>Maximum limit reached!</p>}
      {counter === 0 && <p style={{color: '#ff9800'}}>Minimum limit reached!</p>}
    </div>
  )
}

export default App;