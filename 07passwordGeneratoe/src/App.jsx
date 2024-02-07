import { useState, useCallback, useRef, useEffect } from 'react'

function App() {
  const [length, lenCount] = useState(12)
  const [number, numCount] = useState(false)
  const [character, charCount] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)
//we use useCallback to optamise and save the data in cahacha we can also make thus generator without useCallback by using useEffect
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(character) str += "!@#$%^&*(){}~`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length,number,character,setPassword])

  const copyPassword = useCallback(()=>{
    console.log(passwordRef)
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=> {
    passwordGenerator()
  }, [length,number,character,setPassword])
  return (
    <>
      <div className ="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value = {password}
            className="outline-none w-full py-1 px-3"
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPassword}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {lenCount(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type='checkbox'
              defaultChecked={number}
              id="numberInput"
              onChange={()=>{
                numCount((prev)=> !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type='checkbox'
              defaultChecked={character}
              id="charInput"
              onChange={()=>{
                charCount((prev)=> !prev)
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
