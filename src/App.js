import React, { useState } from 'react';
import './App.css';

function App() {

const [input, setInput] = useState('');

  return (
    <div className="App">

<h1> Facebook messgenger clone </h1>

<input value = {input} onChange = {event => setInput(event.target.value)} />
<button>Send</button>
    
     </div>
  );
}

export default App;
