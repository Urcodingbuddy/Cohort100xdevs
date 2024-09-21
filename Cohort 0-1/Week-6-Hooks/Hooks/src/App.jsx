import axios  from 'axios'
import './App.css';
import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    console.log("backend-triggerd")
    axios.get('https://jsonplaceholder.typicode.com/todos?id='+5)
    .then(function(res){
      setTodos(res.data)
    console.log("backend-responded")
    })
  },[])
  return( <div>
    {todos.map(todos =>  <Todo key={todos.id} title={todos.title} id={todos.id} />)}
  </div>
  )   
}
function Todo({title, id}){
    return(
      <div style={{margin: '70px'}}>
        <h3> User-Id = {id}</h3>
        <h1>{title}</h1>
      </div>
    )
}
export default App