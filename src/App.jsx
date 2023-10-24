import { useState } from 'react'

import './App.css'

function App() {
let [counter, setCounter] =useState(0)

  //let counter =15;
  let addValue=()=>{
  if(counter<20){  
    counter=counter+1
    setCounter(counter)
  }}
  let removeValue=()=>{
    if (counter> 0){
    setCounter(counter-1)   
  }}
   return (
    <>
     <h1>Test Counter</h1>

     <h1>Value:{counter}</h1>

     <button onClick={addValue}>Add</button>

     <button onClick={removeValue} >Remove</button>
    </>
  )
}

export default App
