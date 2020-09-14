import { ButtonGroup } from '@material-ui/core';
import React, { useState , useEffect } from 'react';
import { Button , FormControl , InputLabel ,  Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {

const [input, setInput] = useState('');
const [messages , setMessages] = useState([]);
const [username , setUsername] = useState('');

/*console.log(input);
console.log(messages);
*/ 
useEffect(() => {

  //const username = prompt("Please enter your name");
  setUsername(prompt('Please enter your name'));

}, [input])

const sendMessage = (event) =>{

    event.preventDefault();
   setMessages([...messages, input]);
   setInput('');
}

  return ( 
    <div className="App">

<h1> Facebook messgenger clone </h1>
<h2> Welcome {username} </h2>

<form>
<FormControl>
  <InputLabel>Enter a message</InputLabel>
  <Input  value = {input} onChange = {event => setInput(event.target.value)} />
  <Button  disabled={!input} variant ="contained" color ="primary"  type = 'submit'  onClick = {sendMessage}>Send</Button>
</FormControl>
</form>
{
  messages.map(message => (
    <Message text={message} />
  ))
}
    
     </div>
  );
}

export default App;
