import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[
        {
            id: 1,
            text: 'Hello User',
            completed: false,
            updateStatus: false
        }
    ]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
                updateStatus: false
            }
            state.todos.unshift(todo)
        },
        removeAll:(state, action)=>{
            state.todos = []
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=>(todo.id !== action.payload.id))
        },
        updateTodo:(state, action)=>{
            state.todos.map((todo)=>{
                if(todo.id === action.payload.id){
                    todo.id = action.payload.id
                    todo.text = action.payload.text
                    todo.completed = action.payload.completed
                    todo.updateStatus = !action.payload.updateStatus
                }
            })
        },
        updateTodoStat:(state, action)=>{
            state.todos.filter((todo)=>{
                if(todo.id === action.payload.id){
                    todo.updateStatus = !todo.updateStatus
                }
            })
        },
        toggleAll:(state, action)=>{
            state.todos.filter((todo)=>{
                if(todo.id == todo.id){
                    todo.completed = !todo.completed
                }
            })
        },
        toggleTodo:(state, action)=>{
            state.todos.filter((todo)=>{
                if(todo.id === action.payload.id){
                    todo.completed = !todo.completed
                }
            })
        }
    }
})

export const {addTodo, removeAll, removeTodo, updateTodo, updateTodoStat, toggleTodo, toggleAll} = todoSlice.actions

export default todoSlice.reducer
