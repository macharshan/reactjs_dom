
import TodoForm from './components/TodoForm'
import TodosList from './components/TodosList'
import { Provider } from 'react-redux'
import store from './app/store'
import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <Provider store={store}>
        <div className='w-full min-w-fit h-screen bg-zinc-900 text-orange-700'>
          <div className='flex flex-col justify-center items-center gap-4 mb-4'>
            <h1 className='mt-8 text-5xl'>Todos</h1>
            <div>
              <TodoForm />
            </div>
          </div>
          <div className='w-6/12 h-3/5 p-4 pt-0 mx-auto flex flex-col justify-normal items-center gap-2 overflow-scroll'>
            {/* todolist */}
            <TodosList />
          </div>
        </div>
      </Provider>
    </UserContextProvider>
  )
}

export default App
