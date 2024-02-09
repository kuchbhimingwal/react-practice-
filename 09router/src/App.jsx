import { useState } from 'react'
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import Footer from '../components/footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
