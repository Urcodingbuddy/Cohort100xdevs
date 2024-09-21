
import { useState,  useContext  } from 'react'
import { CountContext } from './context'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <CountContext.Provider value={{count, setCount}} > 
        <Count/>
      </CountContext.Provider>
    </div>
  )
}
function Count() {
  return <div>
    <CountRenderer />
    <Buttons  />
  </div>
}
function CountRenderer() {
  const {count} = useContext(CountContext)
  return <div>Count: {count}</div>
}

function Buttons() {
  const {count, setCount} = useContext(CountContext)
  return <div>
    <button onClick={() => { setCount(count - 1) }}> ➖ </button>
    <button onClick={() => { setCount(count + 1) }}> ➕ </button>
  </div>
}
export default App


