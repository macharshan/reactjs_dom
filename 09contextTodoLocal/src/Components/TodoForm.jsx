import React, { useState } from "react";
import { useTodo } from "../Contexts";

export function TodoForm(){
    const [todo,setTodo] = useState("")

    const {addTodo} = useTodo()

    // console.log(todo)
    
    const add = (e) =>{
        e.preventDefault()

        if(!todo) return

        addTodo({todo, todoCompleted: false})
        setTodo("")
    }

    return(
        <>
            <form className="w-full m-auto text-black flex justify-center items-center border-2 border-black rounded-3xl"
            onSubmit={add}>
                <input type="text" name="todoInput" id="todoInput" placeholder="Enter Todo here..." 
                className="flex-grow bg-gray-800 p-4 rounded-l-3xl text-white"
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
                />
                <button type="submit"
                className="p-4 bg-gray-700 rounded-r-3xl text-black text-center"
                >ADD</button>
            </form>
        </>
    )
}