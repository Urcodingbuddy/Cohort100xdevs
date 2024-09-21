import { useEffect, useMemo, useState } from 'react'
import './App.css'
function useTodos(){
  const [todos, setTodos] = useState(0)
  useEffect(()=>{
    axios.get("")
    .then((res)=>{
      setTodos(res.data.todos)
      console.log(res.data.todos)
    })
  },[])
  return todos;
}
function App() {
  console.log("Main func Called :)")
  const todos = useTodos();
  return (
    {todos}
  )
}
export default App
