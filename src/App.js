import { ButtonGroup } from '@material-ui/core';
import React, { useState , useEffect } from 'react';
import { Button , FormControl , InputLabel ,  Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {

const [input, setInput] = useState('');
const [messages , setMessages] = useState([{username:'Facebook', text:'Welcome to messenger' }]);
const [username , setUsername] = useState('');

/*console.log(input);
console.log(messages);
*/ 

useEffect(() => {

  //const username = prompt("Please enter your name");
  setUsername(prompt('Please enter your name' ));

}, []);

const sendMessage = (event) =>{

   event.preventDefault();
   setMessages([...messages, {username: username, text: input}]);
   setInput('');
}

  return ( 
    <div className="App">

<h1> <i>  Messenger </i>  </h1>
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
    <Message username={message.username} text={message.text} />
  ))
}
    
     </div>
  );
}

export default App;
