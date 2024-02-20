import React, { useContext, useState } from "react";
import UserContext from "../Contexts/UserContext";


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    return(
    <>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder="username" />
        <input type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="password" />
        <button
        onClick={(e)=>{
            setUser({username, password})
        }}
        >Submit</button>
    </>
    )
}


export default Login