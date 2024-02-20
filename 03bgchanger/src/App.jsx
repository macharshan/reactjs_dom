import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [bgColor, setBgColor] = useState("gray")

  return (
    <>
      <div className='w-full h-screen'
          style={{backgroundColor: bgColor}}>
          <div className='flex justify-center text-center fixed bottom-12 inset-x-0'>
            <div className='bg-white p-4 rounded-3xl flex gap-4 text-black border border-black border-solid' >
              <button 
              className='min-w-20 max-w-40 p-4 bg-violet-600 rounded-3xl'
              onClick={() => setBgColor("violet")}
              >voilet</button>
              <button 
              className='min-w-20 max-w-40 p-4 bg-indigo-600 rounded-3xl'
              onClick={() => setBgColor("indigo")}
              >indigo</button>
              <button 
              className='min-w-20 max-w-40 p-4 bg-blue-600 rounded-3xl'
              onClick={() => setBgColor("blue")}
              >blue</button>
              <button 
              className='min-w-20 max-w-40 p-4 bg-green-600 rounded-3xl'
              onClick={() => setBgColor("green")}
              >green</button>
              <button 
              className='min-w-20 max-w-40 p-4 bg-yellow-600 rounded-3xl'
              onClick={() => setBgColor("yellow")}
              >yellow</button>
              <button 
              className='min-w-20 max-w-40 p-4 bg-orange-600 rounded-3xl'
              onClick={() => setBgColor("orange")}
              >orange</button>
              <button 
              className='min-w-20 max-w-40 p-4 bg-red-600 rounded-3xl'
              onClick={() => setBgColor("red")}
              >red</button>
              <button 
              className='min-w-20 max-w-40 p-4 bg-black rounded-3xl text-white'
              onClick={() => setBgColor("black")}
              >black</button>
              <button 
              className='min-w-20 max-w-40 p-4 bg-white rounded-3xl border border-black border-solid'
              onClick={() => setBgColor("White")}
              >white</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
