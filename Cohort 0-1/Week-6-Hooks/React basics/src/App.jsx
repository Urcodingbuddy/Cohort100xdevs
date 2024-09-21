import React, { useState } from 'react'
import { memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'Task 1',
    description: 'This is the first task'
  }, {
    id: 2,
    title: 'Task 2',
    description: 'This is the second task'

  }, {
    id: 3,
    title: 'Task 3',
    description: 'This is the third task'
  }])

  function addTodo() {
    setTodos([...todos, {
      id: todos.length + 1,
      title: Math.random(),
      description: Math.random()
    }])

    //------------ ugly way to do it---------------

    // const newTodos = [];
    // for(let i = 0; i<todos.length; i++){
    //   newTodos.push(todos[i])
    // }
    // newTodos.push({
    //   id: todos.length+1,
    //   title: Math.random(),
    //   description: Math.random()
    // })
    // setTodos(newTodos)
  }

  return (
    <div>
      <button onClick={addTodo} >Add Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </div>
  )
}

function Todo({ title, description }) {
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}



export default App
