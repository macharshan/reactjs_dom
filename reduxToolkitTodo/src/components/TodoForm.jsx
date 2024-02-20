import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/Todo/todoSlice'

function TodoForm() {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()

    const add = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }


  return (
    <form className="w-full m-auto text-black flex justify-center items-center border-2 border-black rounded-3xl"
    onSubmit={add}>
        <input type="text" name="todoInput" id="todoInput" placeholder="Enter Todo here..." 
        className="flex-grow bg-gray-800 p-4 rounded-l-3xl text-white"
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button type="submit"
        className="p-4 bg-gray-700 rounded-r-3xl text-black text-center"
        >ADD</button>
    </form>
  )
}

export default TodoForm