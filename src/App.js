import { ButtonGroup } from '@material-ui/core';
import React, { useState , useEffect } from 'react';
import { Button , FormControl , InputLabel ,  Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';

function App() {
 
const [input, setInput] = useState('');
const [messages , setMessages] = useState([ ]);
const [username , setUsername] = useState('');

/*console.log(input);
console.log(messages); 
*/ 

useEffect(() => {

  //run once when the app component loads ;
  db.collection('messages')
  .orderBy('timestamp','desc')
  .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => doc.data()))
  });

}, [])


useEffect(() => {

  //const username = prompt("Please enter your name");
  setUsername(prompt('Please enter your name' ));

}, [])

const sendMessage = (event) =>{

   event.preventDefault();

   db.collection('messages').add({

    message:  input,
    username: username,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
   })

  /* setMessages([...messages, {username: username, text: input}]);*/
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
    <Message username={username} message={message} />
  ))
}
    
     </div>
  );
}

export default App;
