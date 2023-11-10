import { useState } from 'react'


function App() {
  const [color , setColor] = useState("black")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 rounded-xl ">
          <button onClick={()=> setColor("red")}  className='outline-4 px-2 py-4 rounded-full text-white'  style={{backgroundColor: "red"}}> 
           red
           </button> 
          <button onClick={()=> setColor("green")}  className='outline-4 px-2 py-4 rounded-full text-white'  style={{backgroundColor: "green"}}> 
          green
           </button> 
          <button onClick={()=> setColor("blue")} className='outline-4 px-2 py-4 rounded-full text-white'  style={{backgroundColor: "blue"}} > 
           blue
           </button> 
          <button onClick={()=> setColor("yellow")}  className='outline-4 px-2 py-4 rounded-full text-black'  style={{backgroundColor: "yellow"}}> 
           yellow
           </button> 

         </div>
      
      </div>
      
     </div>
    </>
  )
}

export default App
