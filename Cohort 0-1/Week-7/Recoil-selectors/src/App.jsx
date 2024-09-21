import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector} from "./store/atom/count.jsx";

import './App.css'
function App() {
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
    <Input/>
    <CountRenderer />
    <Buttons  />
    <IsEvenOdd/>
  </div>
}

function Input(){
  const [setInputValue] = useState("")
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

function IsEvenOdd(){
  const isOdd = useRecoilValue(evenSelector)
  return <div>
    {isOdd ?  'It is Odd': 'It is Even'}
  </div>
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


