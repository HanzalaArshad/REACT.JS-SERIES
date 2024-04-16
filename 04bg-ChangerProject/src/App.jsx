import { useState } from "react"


function App() {

  const [color,setColor]=useState("white")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >

      <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2">
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"red "}}
        onClick={()=> setColor("red")}>

          RED</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"blue"}}
        onClick={()=>setColor("blue")}
        >

          BLUE</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"green"}}
        onClick={()=>setColor("green")}
        >
          GREEN</button>
          

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"purple"}}
        onClick={()=>setColor("purple")}
        >
          PURPLE</button>


          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"yellow"}}
        onClick={()=>setColor("yellow")}
        >
          GREEN</button>


          
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"pink"}}
        onClick={()=>setColor("pink")}
        >
          PINK</button>

          

       </div>


      </div>

      <div className="flex justify-center align-middle text-white bg-black rounded block">PICK BACKGROUND COLOR</div>
    </div>
  )
}

export default App
