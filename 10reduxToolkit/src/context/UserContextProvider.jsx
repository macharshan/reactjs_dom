import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children})=>{
    const [updateStatus, setUpdateStatus] = useState(false)
    const [targetTodo, setTargetTodo] = useState({})

    return(
        <UserContext.Provider value={{updateStatus, setUpdateStatus, targetTodo, setTargetTodo}}>
            {children}
        </UserContext.Provider>
    )
}

export default  UserContextProvider