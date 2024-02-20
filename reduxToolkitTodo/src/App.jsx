import { Provider } from 'react-redux'
import TodoForm from './components/TodoForm'
import TodoItems from './components/todoItems'
import { store } from './app/store'

function App() {

  return (
    <Provider store={store}>
      <TodoForm />
      <TodoItems />
    </Provider>
  )
}

export default App
