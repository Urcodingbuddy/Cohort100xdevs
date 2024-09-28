import { useState } from 'react'
import {InputBox} from '@repo/ui/input-box'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <InputBox/>
    </div> 
  )
}

export default App
