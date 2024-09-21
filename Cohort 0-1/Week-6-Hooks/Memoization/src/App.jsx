import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [counter, setcounter] = useState(0)
  const [inputValue, setInputValue] = useState(0)


  let count = useMemo(()=>{
    console.log("Memo Called :)")
    let finalcount = 0;
  for(let i = 1; i<=inputValue; i++){
    finalcount += i;
    }
    return finalcount;
  },[inputValue])


  return (
    <>
        <input  onChange={function(e){
          setInputValue(Number(e.target.value))
        }}placeholder={"find sum from 1 to n"} type="text" />
        <br />
        Sum from 1 to {inputValue} is {count}
        <br />
       <button onClick={()=>{
        setcounter(counter+1)
       }}>counter: {counter}</button>
    </>
  )
}

export default App
