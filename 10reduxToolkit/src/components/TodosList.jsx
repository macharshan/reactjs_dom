import React, { useContext, useId } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleTodo, toggleAll, removeAll, updateTodoStat } from '../features/Todo/todoSlice'
import UserContext from '../context/UserContext.js'

function TodosList() {
  const {updateStatus, setUpdateStatus, setTargetTodo,setError} = useContext(UserContext)
  const id = useId()

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
    {(todos.length > 0)? (
      <div className='w-full p-2 text-lg bg-zinc-900 flex flex-wrap justify-between items-center gap-4'>
        <p className='ml-4 hover:underline'>
          <input 
          type="checkbox" 
          id={id} 
          onChange={()=>{
            dispatch(toggleAll())
            setError("")}} 
          disabled={updateStatus} 
          className='cursor-pointer'/> 
          <label htmlFor={id} className='ml-2 text-red-500 hover:underline decoration-red-600 cursor-pointer'>mark all as completed</label>
        </p>
        <button className='p-2 text-red-500 hover:underline decoration-red-600 cursor-pointer' onClick={()=>{
          dispatch(removeAll())
          setUpdateStatus(!updateStatus)
          setError("")}}>Delete All</button>
      </div>): null
    }
      {todos.map((todo)=>(
        <ul className='w-full p-4 text-lg bg-stone-300 rounded-lg flex flex-wrap justify-center items-center gap-4' key={todo.id} >
            <li className='basis-4 ml-4'>
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={()=>dispatch(toggleTodo(todo))} 
                disabled={(updateStatus && todo.updateStatus) || (!todo.updateStatus && updateStatus)}
              />
            </li>
            <li className='grow'><h1 className={`${(todo.completed === true)? "line-through": "" }`}>{todo.text}</h1></li>
            <li><button className={`basis-4 mr-4 ${(!todo.updateStatus && updateStatus)? "cursor-not-allowed": "cursor-pointer"}`} 
                  onClick={()=>{
                    dispatch(updateTodoStat(todo))
                    setUpdateStatus(!updateStatus);
                    setTargetTodo(todo);
                    setError("")
                    }
                  } 
                  hidden={(todo.updateStatus && updateStatus) || todo.completed}
                  disabled={(!todo.updateStatus && updateStatus)}>✏</button></li>
            <li><button className='basis-4 mr-4 cursor-pointer' 
                  onClick={()=>{
                    dispatch(updateTodoStat(todo))
                    setUpdateStatus(!updateStatus)
                    setTargetTodo({})
                    setError("")}}
                  hidden={!(updateStatus && todo.updateStatus)}
                  >❌</button></li>
            <li><button className={`basis-4 mr-4 ${(!todo.updateStatus && updateStatus)? "cursor-not-allowed": "cursor-pointer"}`} 
                  onClick={()=>{
                    dispatch(removeTodo(todo))
                    setError("")}} 
                  hidden={updateStatus && todo.updateStatus}
                  disabled={!todo.completed && updateStatus}
                  >🗑</button></li>
        </ul>
      ))}
    </>
  )
}
export default TodosList