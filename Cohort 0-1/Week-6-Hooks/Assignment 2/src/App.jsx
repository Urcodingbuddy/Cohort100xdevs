
import axios  from 'axios'
import './App.css';
import { useEffect, useState } from "react";

function App() {
 return <div>
  <Todo id={5}/>
 </div>
}
function Todo({id}){
  const [todo, setTodo] = useState({})
  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=`+id)
    .then(async function(res){
      const data = await res.data;
      setTodo(data.todo)
      console.log(data)
    })
  },[id])
    return(
      <div  style={{margin: '70px'}}>
        <h1>
          {todo.title}
        </h1>
        <h4>
          {todo.description}
        </h4>
      </div>
    )
}
export default App
