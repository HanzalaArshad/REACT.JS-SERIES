import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15);
  const add_value = () => {
    if (counter >= 20) {
      return; // Do nothing if counter is already 20 or more
    }
    setCounter(counter + 1);
    console.log("the clicked value is ", counter);
  };
  

  const remove_value = () => {
    
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  
  };
  
  return (
    <>
      <h1>chai aur react </h1>
      <h2>Counter value {counter}</h2>

      <button
       onClick={add_value}
      >Add Value {counter}</button>
      <br />
      <button 
      onClick={remove_value}>decrease Value{counter}</button>
      <p>hello {counter}</p>
    
    </>
  )
}

export default App
