import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
const [length,setLength]=useState(8);
const [isNumber,setIsNumber]=useState(false);
const [isChar,setIsChar]=useState(false);
const [Password,setPassword]=useState("")
const passwordRef=useRef(null)

const PasswordGenerator=useCallback(()=>{
 

  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(isNumber) str+="0123456789"
  if(isChar) str+="!@$^$&*~`+={}"
   
  for (let i=1; i <=length; i++) {
    let char=Math.floor(Math.random()*str.length+1)

    pass += str.charAt(char)
    
  }

  setPassword(pass)


},[length,isNumber,isChar,setPassword])


const CopyPasswordonClipBoard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,9);
  window.navigator.clipboard.writeText(Password);
}, [Password]);
  
useEffect(() => {
  PasswordGenerator();
}, [length, isNumber, isChar, PasswordGenerator]);

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4 py-3 my-8 text-orange-500 bg-black  '>
        <h1 className='text-white text-center my-3 '>PASSWORD GENERATOR</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text"
           
                 value={Password}
                 className='outline-none w-full py-1 px-3  '
                 placeholder='password'
                 readOnly
                 ref={passwordRef}
          />
<button 
  onClick={CopyPasswordonClipBoard} 
  className='outline-none bg-orange-700 text-white px-3 py-1.5 rounded-md transition-colors duration-300 hover:bg-purple-900'
>
  Copy
</button>

        </div>

        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            
             />
            <label className='text-orange-500'>length=

              {length}
            </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
                   defaultChecked={isNumber}
                   id="numberInput"
                   onChange={()=>{setIsNumber((prev)=>
                  !prev)}}
            
            />
            <label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input type="checkbox"
                   defaultChecked={isChar}
                   id="charInput"
                   onChange={()=>{setIsChar((prev)=>
                  !prev)}}
            
            />
            <label htmlFor='charInput'>Character</label>
          </div>
 

 
                </div>
      </div>
        </>
  )
}

export default App
