import './App.css'
import UserContextProvider from './Contexts/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/login'

function App() {

  return (
    <UserContextProvider>
      <h1>macharshan</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
