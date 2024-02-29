import { useState } from "react"


function App() {
  const [color,setColor] = useState("Teal")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0  px-2" >
        <div className="fixed flex flex-wrap justify-center showdo-lg bg-white gap-3 py-2 px-4 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
          style={{backgroundColor: "red"}}
          >
          Red</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
          style={{backgroundColor: "blue"}}
          >
          blue</button>
          <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
          style={{backgroundColor: "orange"}}
          >
          orange</button>
          <button
          onClick={() => setColor("coral")}
          className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
          style={{backgroundColor: "coral"}}
          >
          coral</button>
          <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
          style={{backgroundColor: "purple"}}
          >
          purple</button>
          <button
          onClick={() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
          style={{backgroundColor: "grey"}}
          >
          grey</button>
          <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
          style={{backgroundColor: "black"}}
          >
          black</button>
          <button
          onClick={() => setColor("skyblue")}
          className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
          style={{backgroundColor: "skyblue"}}
          >
          skyblue</button>
          <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
          style={{backgroundColor: "olive"}}
          >
          olive</button>
          
        </div>
      </div>
    </>
  )
}

export default App
