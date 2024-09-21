import { useEffect, useState } from 'react'
import axios from 'axios'
import BarLoader from 'react-spinners/BarLoader'
import useTodos from './hooks/useTodos';
import useIsOnline from './hooks/isOnline';
import useMousePointer from './hooks/mouseMove'
import useInterval from './hooks/interval';
import useDebounce from './hooks/debounce'

function App() {
  const mouseMoves = useMousePointer();
  const isOnline = useIsOnline();
  const { todos, loading } = useTodos(5);
  const { count, setCount } = useInterval(1)
  const [value, setValue] = useState(0);
  const debounceValue = useDebounce(value, 500)

  useInterval(() => {
    setCount(c => c + 1)
  }, 1000)

  if (!isOnline) {
    console.log("You are offline !, Please connect to the internet ");
  }
  else {
    console.log("You are Online yay!")
    if (loading) {
      return <div>
        <h1>
          Loading...
          <BarLoader color={"#123abc"} />
        </h1>
      </div>
    }
    return (
      <h2>
        Counter is {count}...
        <p>--------------------</p>
        <div>
        DeBounce Value is {debounceValue}
        </div>
        <input type="text" onChange={e=> setValue(e.target.value)}/>
        <div className='flex justify-center'>
          Your mouse X:{mouseMoves.x} Y:{mouseMoves.y}
          {todos.map(todo => <Track key={todo.id} todo={todo} />)}
        </div>
      </h2>
    )
  }
}
function Track({ todo }) {
  return <div className='flex items-center'>
    <br />
    {todo.title}
    <br />
    {todo.description}
    <br />
  </div>
}
export default App




// -----------------------------------------
/*
import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [render, setRender] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r)
    }, 3000)
  }, [])

  if (!render) {
    return <div>
      <h1>After 2 seconds</h1>
    </div>
  }
  return (
    <>
      <h1>
        <MyComponent />
      </h1>
    </>
  )
  // instead of this if else we can use like 👇🏼
  // return (
    //   <>
    //     <h1>
    //       {render ? <MyComonent/>: <div>After 10 seconds</div>}
    //     </h1>
    //   </>
    // )

  }

function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.log("Component Mounted")

    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("Component Unmounted")
    };
  }, []);

  return <div>
    Before 2 seconds
  </div>

  // Render UI
}

export default App */

//  ------------------------------