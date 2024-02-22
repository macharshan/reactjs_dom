import React, {useContext, useId, useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo, updateTodo } from '../features/Todo/todoSlice'
import UserContext from '../context/UserContext.js'

function TodoForm() {
    const {updateStatus, setUpdateStatus, targetTodo, setTargetTodo,setError, error} = useContext(UserContext)
    const [input, setInput] = useState('')
    const [updateInput, setUpdateInput] = useState(targetTodo.text)

    
    const todoInput = useId()
    const dispatch = useDispatch()
    
    const handlerAddClick = (e) =>{
        e.preventDefault();
        setError("")
        if(input.trim() !== ""){
          dispatch(addTodo(input.trim()))
          setInput('')
          setError("")
        } else {
          setError("Todo is empty");
        }
    }
    
    const handlerUpdateClick = (e) =>{
        e.preventDefault();
        setError("")
        if(updateInput.trim() !== ""){
          const newTodo = {
            id:targetTodo.id,
            text:updateInput,
            completed:targetTodo.completed,
            updateStatus:targetTodo.updateStatus
          }
          dispatch(updateTodo(newTodo))
          setUpdateStatus(!updateStatus)
          setTargetTodo({})
          setUpdateInput('')
          setError("")
        } else {
          setError("Edited todo is empty")
        }
      }


  return (
    <>
      {(!updateStatus)?
        <form 
        onSubmit={handlerAddClick}
        className='w-3/4 mx-auto text-2xl p-4 flex flex-wrap justify-center items-center gap-y-4'
        >
            <label htmlFor="todoInput"
            className='basis-full ml-4'>Enter your todo :-</label>
            <div className='basis-full flex flex-wrap'>
              <input type="text" name='todoText' id="todoInput" placeholder='todo....' 
                value={input} onChange={(e)=>setInput(e.target.value)}
                className='basis-9/12 mx-auto p-4 rounded-l-xl'/>
              <button type="submit"
                className='basis-3/12 bg-blue-500 p-4 rounded-r-xl text-black'
                // disabled={input.trim() === ""}
                >Add</button>
            </div>
            {error && <span className='basis-full text-center'>{error}</span>}
        </form>
        :
        <form 
        onSubmit={handlerUpdateClick}
        className='w-3/4 mx-auto text-2xl p-4 flex flex-wrap justify-center items-center gap-y-4'
        >
            <label htmlFor="todoInput"
              className='basis-full ml-4'>Update your todo :-</label>
            <input type="text" name='todoText' id="todoInput" placeholder='todo....' 
              value={updateInput || ""} onChange={(e)=>setUpdateInput(e.target.value)}
              className='basis-9/12 mx-auto p-4 rounded-l-xl'/>
            <button type="submit"
                className='basis-3/12 bg-blue-500 p-4 rounded-r-xl text-black'
                // disabled={input.trim() === ""}
                >Update</button>
            {error && <span className='basis-full text-center'>{error}</span>}
        </form>
}
    </>
  )
}

export default TodoForm