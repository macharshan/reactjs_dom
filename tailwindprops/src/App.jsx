import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'


function App() {
  const [count, setCount] = useState(0)

  const pName = `dell`

  return (
    <>
      <h1 className='p-4 bg-gray-700 rounded-3xl border-solid border border-black mb-4' >Tailwind</h1>
      <div className='flex gap-4'>
          <Card productName="iphone" button="see me"/>
          <Card productName="oneplus" button="click me"/>
          <Card productName={pName}/>
      </div>
    </>
  )
}

export default App
