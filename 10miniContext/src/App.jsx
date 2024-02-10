import Login from './conponents/Login'
import Profile from './conponents/Profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React With Chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
