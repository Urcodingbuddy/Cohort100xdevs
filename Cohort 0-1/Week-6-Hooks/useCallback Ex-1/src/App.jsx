import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { memo } from'react';
function App() {
const [count, setCount] = useState(0)  
 const inputFucntion = useCallback(()=>{
    console.log("Re-Renderd!")
  },[])
  return <div>
    <ButtonComponent inputFucntion={inputFucntion}/>
    <button onClick={()=>{
      setCount(count+1);
    }} >Click me {count} </button>
  </div>
}
const ButtonComponent = memo(({inputFucntion}) => {
  console.log("Child")
  return <div>
    <button>Button Clicked</button>
  </div>
})
export default App;