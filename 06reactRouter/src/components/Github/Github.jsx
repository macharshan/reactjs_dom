import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github(){

    const data = useLoaderData()
    // const [data,setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/macharshan')
    //     .then((response)=> response.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    //     // console.log(data)
    //     return data
    // }, [])

    return (
        <>
            <div className='bg-gray-600 text-3xl text-center text-white p-4'>Github Followers:{data.followers}
            <div>{data.name}</div>
            </div>
        </>
    )
}


export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/macharshan')
    const data = res.json();
    return data
}