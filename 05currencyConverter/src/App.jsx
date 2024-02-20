import { useState } from 'react'
import { CurrencyBox } from './components/index.jsx'
import getCurrencyInfo from './hooks/getCurrencyInfo.js'

function App() {
  const [amount, setAmount] = useState(true)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = getCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  // console.log(options)


  const swap = () =>{
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = amount * currencyInfo[to]

  console.log(convert)


  return (
    <>
      <div
      className='flex justify-center items-center a;'
      style={{width:`100vw`, height:`100vh`, backgroundColor: `#212121`}}>
        <div
        className='w-fit p-4 rounded-lg bg-pink-600 flex flex-col gap-4 justify-center items-center'>
            <CurrencyBox 
            label = "FROM"
            amount = {amount}
            onAmountChange={(amount)=>setAmount(amount)}
            setCurrency={from}
            currencyOptions = {options}
            onCurrencyChange={(currency) => setFrom(currency)}
            />


            {/* <h1>currency:- {options}</h1> */}
            <button
            className='p-2 bg-blue-400 rounded-lg text-center border-2 border-slate-500' 
            onClick={()=>swap()}>SWAP</button>


            <CurrencyBox 
            label = "To"
            amount = {convertedAmount}
            amountDisabled
            setCurrency={to}
            currencyOptions = {options}
            onCurrencyChange={(currency) => setTo(currency)}
            />


            <button 
            className='p-4 bg-blue-400 rounded-xl text-center w-full'
            onClick={() => setConvertedAmount(convert)}
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </div>
      </div>
    </>
  )
}

export default App
