import { useCallback, useState, useEffect, useRef} from 'react'
import './App.css'

function App() {
  let [length, setLength]= useState(8)
  let [numbersAllowed, setNumbersAllowed] = useState(false)
  let [characterAllowed, setCharacterAllowed] = useState(false)
  let [password, setPassword] = useState("")
  let [reset, setReset] = useState(true)

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() =>{
    let pass = ""
    
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbersAllowed) str += "0123456789"
    if(characterAllowed) str += "~!@#$%^&*(){}[]<>?/"

    for (let i = 0; i <= length; i++) {
      const char = Math.floor((Math.random() * str.length) + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  
  },[length, numbersAllowed, characterAllowed])

  const copyPassword = useCallback(() => {
      passwordRef.current?.select(password)
      window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => {
    generatePassword()
  },[length, numbersAllowed, characterAllowed, reset])

  return (
    <>
      <div className='w-full h-screen flex justify-center'
      style={{backgroundColor: '#212121', color:`#abcdef`}}>
        <div className='w-full max-w-xl  h-fit mt-12 p-4 bg-cyan-500 text-black border border-red-800 rounded-3xl text-center'>
          <h1 className='text-center text-3xl mb-4'>Password Generator</h1>
          <div className='mt-4 mb-4 w-full inset-x-0'>
            <button className='rounded-l-3xl p-4 text-2xl bg-blue-600' onClick={()=>setReset(!reset)}>reset</button>
            <input 
            type="text" value={password} readOnly
            ref={passwordRef}
            className='p-4 text-2xl' />
            <input 
            type="button" value="Copy"
            onClick={copyPassword} 
            className='rounded-r-3xl bg-blue-600 p-4 text-2xl'/>
          </div>
          <div className='flex justify-center gap-4'>
            <div>
              <input type="range" min={6} max={50} name="range" id="range" value={length}
              onChange={(e) => setLength(e.target.value)}
              className='cursor-pointer'
              />
              <label htmlFor="range"
              className='align-center ml-2'>Length({length})</label>
            </div>
            <div>
              <input type="checkbox" name="numbers" id="numbers"
              onChange = {() =>setNumbersAllowed((prev) => !prev)}
              />
              <label htmlFor="numbers"
              className='align-center ml-2'>Numbers</label>
            </div>
            <div>
              <input type="checkbox" name="characters" id="characters" 
              onChange={() => setCharacterAllowed((prev) => !prev)}/>
              <label htmlFor="characters"
              className='align-center ml-2'>Characters</label>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
