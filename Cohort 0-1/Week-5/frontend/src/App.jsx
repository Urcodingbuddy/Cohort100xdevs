import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
  const [todos, setTodos] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  useEffect(()=>{
    fetch('http://localhost:3000/todo')
    .then(async function(res){
      const json = await res.json();
      setTodos(json)
      console.log(json)
      setIsDataFetched(true)
    }) 
  },[]);
  const handleTodoCreated = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <div>
      <CreateTodo onTodoCreated={handleTodoCreated}></CreateTodo>
      <Todos todos = {todos}></Todos>
    </div>

  )
}

export default App
