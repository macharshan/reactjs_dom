import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/Todo/todoSlice'

function TodoItems() {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoText, setTodoText] = useState("")

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
        {todos.map((todo)=>(
            <div key={todo.id}
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}>
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg`}
                value={todo.text}
                // onChange={(e) => setTodoText(e.target.value)}
                readOnly={!isTodoEditable}
            />
            
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => {
                    if(!isTodoEditable){
                        return
                    } else{
                        return dispatch(updateTodo(todo))
                    }
                }}
                >
                ✏
            </button>
                {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(removeTodo(todo.id))}
            >
                ❌
            </button>
        </div>
        ))}
        </>
    );
}

export default TodoItems;
