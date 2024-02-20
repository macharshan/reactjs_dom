import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/todoSlice'

const store = configureStore({
    reducer: todoReducer
})

export default store