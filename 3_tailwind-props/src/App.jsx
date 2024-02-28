import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componet/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    fname : "sagar",
    age : 23

  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-md p-3 m-5'>tailwind</h1>
      <Card userName = "sagar" btnText = "click Me!"/>
      <Card userName = "Manoj" btnText = "submit"/>
    </>
  )
}

export default App
