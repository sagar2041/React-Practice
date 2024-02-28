import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  let addValue = () =>{
    if(count < 20){
      setCount(count + 1)
    }
    
  }
  
  let removeValue = () =>{
    if(count > 0){
      setCount(count - 1)
    }
    
  }
  return (
    <>
     <h1>counter : {count}</h1>

     <button 
     onClick={addValue}
     >Add counter :{count}</button>
     <br /><br />
     <button
     onClick={removeValue}
     >Remove counter : {count}</button>
    </>
  )
}

export default App
