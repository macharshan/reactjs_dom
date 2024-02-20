import React from 'react'
import {useParams} from 'react-router-dom'

export default function User() {
    const {userid}  = useParams()

    return(
        <>
        <div className='bg-green-600 text-3xl txt-white p-4'>User: {userid}</div>
        </>
    )
}