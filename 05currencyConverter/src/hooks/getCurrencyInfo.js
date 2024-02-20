import {useEffect, useState} from 'react'

function getCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => {
            setData(response[currency])
            // console.log(data)
        })
        .catch((error)=>console.log(error.message))
    },[currency])
    console.log("data obtained from getCurrencyInfo is:", data)
    return data;
}

export default getCurrencyInfo