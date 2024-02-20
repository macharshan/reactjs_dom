import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  function addValue(){
    if(count < 20) setCount(count+1)
  }

  function removeValue(){
    if(0 < count) setCount(count-1) 
  }


  return (
    <>
      <h1>macharshan</h1>
      <h2 id="counter">counter {count}</h2>
      <br />
      <button onClick={addValue}>add value {count}</button>
      <br />
      <button onClick={removeValue}>remove value {count}</button>
    </>
  )
}

export default App
