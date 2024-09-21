import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [incomeTax, setincomeTax] = useState(2000)
  const divRef =  useRef();
  useEffect(()=>{
    setTimeout(()=>{
      console.log(divRef.current)
      divRef.current.innerHTML = 10
    },5000)
  },[])
  return (
    <>
       Hi there , Your Income tax returns are <div ref={divRef}>{incomeTax}</div>
    </>
  )
}
export default App
