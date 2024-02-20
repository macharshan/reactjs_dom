import React, { useEffect, useState } from "react"
import { TodoProvider, TodoContext , useTodo} from "./Contexts"
import { TodoForm } from "./Components/TodoForm"
import { TodoItem } from "./Components"

function App() {
  const [todos, setTodos] = useState([]) 

  const addTodo = (todo) => {
    setTodos((prev) => ([{id:Date.now(),...todo}, ...prev]))
  }
  const editTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prev.id === id? todo : prevTodo) ))
  }
  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((prevTodo) => (prevTodo.id !== id) ))
  }
  const toggleTodo = (id) => {
    setTodos((prev)=> prev.map((prevTodo) => (prevTodo.id === id? {...prevTodo, todoCompleted : !prevTodo.todoCompleted } : prevTodo) ))
  }

  useEffect(()=>{
    const allTodos = JSON.parse(localStorage.getItem("todos"))
    if(allTodos && allTodos.length > 0){
      setTodos(allTodos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, editTodo, deleteTodo, toggleTodo}}>
      <div className="w-full h-screen bg-slate-900">
        <div className="pt-8  pb-8 w-full max-w-3xl m-auto text-center">
          <div className=" p-4 mt-4 inline-block  rounded-xl bg-zinc-400"><h1 className="text-3xl from-neutral-400">Todo list</h1></div>
          <div className="w-full mt-2 p-4 rounded-xl">
            {/* {form} */}
            <TodoForm/>
          </div>
        </div>
        <div className="w-full max-w-3xl h-fit max-h-80 flex flex-col gap-4 m-auto text-white text-center overflow-y-scroll">
          {/* {list } */}
          {todos.map((todoItem)=>(
            <div key={todoItem.id}
            className="w-full">
              <TodoItem todo = {todoItem}/>
            </div>
          )) }
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
