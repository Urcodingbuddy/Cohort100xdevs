import axios  from 'axios'
import './App.css';
import { useEffect, useState } from "react";
import { model } from 'mongoose';

function App(){
const [counter, setCounter] = useState(0)
const [inputValue, setInputValue] = useState(1);

let count = 0;
for(let i = 0; i <= inputValue; i++){
  count++;
}
return <div>
  <input onChange={function(e){
    setInputValue(Number(e.target.value))
  }} type="text" placeholder='Find sum From 1 to n'/>
  Sum From 1 to {inputValue} is {count}

  <button onClick={()=>{
    setCounter(counter+1);

  }}>
    Counter ({counter})
  </button>
</div>

}
export default App;