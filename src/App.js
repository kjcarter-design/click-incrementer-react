import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1)

  function incrementCount() {
    setCount(count + 1)
  }
 

  return (
    <div className="App">
      <p>The current count is {count}</p>
      <button onClick={incrementCount}>+1</button>
    </div>
  );
}

export default App;
