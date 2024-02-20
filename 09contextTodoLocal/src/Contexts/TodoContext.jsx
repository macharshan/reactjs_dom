import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 0,
            todo:"todo msg",
            todoCompleted : false
        }
    ],
    addTodo : (todo) => {},
    editTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

