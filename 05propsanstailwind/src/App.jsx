import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "hitesh",
    age: 23
  }
  let newArray = [1,2,33,]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tilwind test</h1>
    <Card username="shubham" btnText="click me"/>
    <Card username="hitesh" />
    </>
  )
}

export default App
