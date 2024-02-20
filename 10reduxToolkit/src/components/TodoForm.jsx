import React, {useContext, useId, useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo, updateTodo } from '../features/Todo/todoSlice'
import UserContext from '../context/userContext'

function TodoForm() {
    const {updateStatus, setUpdateStatus, targetTodo, setTargetTodo} = useContext(UserContext)
    const [input, setInput] = useState('')
    const [updateInput, setUpdateInput] = useState(targetTodo.text)

    
    const todoInput = useId()
    const dispatch = useDispatch()
    
    const handlerAddClick = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
    
    const handlerUpdateClick = (e) =>{
        e.preventDefault();
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
      }


  return (
    <>
      {(!updateStatus)?
        <form 
        onSubmit={handlerAddClick}
        className='text-2xl p-4 flex flex-wrap justify-center items-center gap-y-4'
        >
            <label htmlFor="todoInput"
            className='basis-full ml-4'>Enter your todo :-</label>
            <input type="text" name='todoText' id="todoInput" placeholder='todo....' 
            value={input} onChange={(e)=>setInput(e.target.value)}
            className='basis-9/12 mx-auto p-4 rounded-l-xl'/>
            <input type="submit" value="Add" 
            className='basis-3/12 bg-blue-500 p-4 rounded-r-xl text-black'/>
        </form>:
        <form 
        onSubmit={handlerUpdateClick}
        className='text-2xl p-4 flex flex-wrap justify-center items-center gap-y-4'
        >
            <label htmlFor="todoInput"
              className='basis-full ml-4'>Update your todo :-</label>
            <input type="text" name='todoText' id="todoInput" placeholder='todo....' 
              value={updateInput || ""} onChange={(e)=>setUpdateInput(e.target.value)}
              className='basis-9/12 mx-auto p-4 rounded-l-xl'/>
            <input type="submit" value="Update" 
              className='basis-3/12 bg-blue-500 p-4 rounded-r-xl text-black'/>
        </form>
}
    </>
  )
}

export default TodoForm