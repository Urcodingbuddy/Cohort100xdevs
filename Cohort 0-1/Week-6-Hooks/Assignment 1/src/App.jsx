
import './App.css';
import { useEffect, useState } from "react";
function App() {
  const [id, setId] = useState(1);
  return( <div>
      <button onClick={()=>{
        setId(id+1);
      }} >Next</button>
      <Todo id={id}/>

  </div>)
function Todo({id}){
    const [todo, setTodo] = useState({});
    useEffect(()=>{
      fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(async (res)=>{
        const data = await res.json();
        console.log(data);
        setTodo(data.todo)
      })
    },[id])

    return <div>
      <h2>{todo.title}</h2>
      <h6>{todo.description}</h6>
    </div>
}}
export default App


/*
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [id, setId] = useState(1);

  return (
    <div>
      <button onClick={() => setId((prev) => prev + 1)}>Next Todo</button>
      <Todo id={id} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    (async function getTodos() {
      const todo = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`);
      const res = await todo.json();
      console.log(res);
      setTodo(res.todo);
    })();
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h5>{todo.description}</h5>
    </div>
  );
}
  */