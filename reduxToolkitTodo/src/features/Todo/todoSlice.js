import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[
        {
            id: 1,
            text: "Helloo User",
        }
    ]
}


export const todoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers:{
        addTodo : (state, action) =>{
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo)=>(todo.id !== action.payload))
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    text: action.payload
                }
            })
        }
    }
})


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer