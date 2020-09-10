import React, { useState } from 'react';
import './App.css';

function App() {

const [input, setInput] = useState('');
const [messages , setMessages] = useState([]);

console.log(input);
console.log(messages);

const sendMessage = event =>{

   setMessages([...messages, input]);
   setInput('');
}

  return (
    <div className="App">

<h1> Facebook messgenger clone </h1>

<input value = {input} onChange = {event => setInput(event.target.value)} />
<button onClick = {sendMessage}>Send</button>
{
  messages.map(message => (
    <p>{message}</p>
  ))
}
    
     </div>
  );
}

export default App;
