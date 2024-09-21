import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom} from "./store/atom/count.jsx";

import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}
function Count() {
  console.log("Count Re-renderd")
  return <div>
    <RecoilRoot>
    <CountRenderer />
    <Buttons  />
    </RecoilRoot>
  </div>
}

function Input(){
  const [inputValue, setInputValue] = useState("")
  return <div>
    <input type="text" onChange={(e)=>{
      setInputValue(e.target.value)
    }} />
  </div>
}


function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>Count: {count}</div>
}


function Buttons() {
  console.log("Button")
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => { setCount(count => count - 1) }}> ➖ </button>
    <button onClick={() => { setCount(count => count + 1) }}> ➕ </button>
  </div>
}
export default App


