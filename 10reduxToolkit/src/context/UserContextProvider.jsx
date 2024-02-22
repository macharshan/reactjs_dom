import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [updateStatus, setUpdateStatus] = useState(false)
    const [targetTodo, setTargetTodo] = useState({})
    const [error, setError] = useState("")

    return(
        <UserContext.Provider value={{updateStatus, setUpdateStatus, targetTodo, setTargetTodo, error, setError}}>
            {children}
        </UserContext.Provider>
    )
}

export default  UserContextProvider