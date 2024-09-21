import axios  from 'axios'
import './App.css';
import { useEffect, useState } from "react";
// if we write --
// import {get}  form 'axios'
// it will return only get fucntionality so applications loads slighty faster :)

function App() {
  const [id, setid] = useState(1)
 return <div>
  <button onClick={()=>{
    setid(1);
  }} >1</button>
  <button onClick={()=>{
    setid(2);
  }} >2</button>
  <button onClick={()=>{
    setid(3);
  }} >3</button>
  <button onClick={()=>{
    setid(4);
  }} >4</button>
  <button onClick={()=>{
    setid(5);
  }} >5</button>
  <Todo id={id}/>
 </div>
}
function Todo({id}){
  const [todo, setTodo] = useState({})
  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=`+id)
    .then( res=> {
      setTodo(res.data.todo)
      console.log(data)
    }) 
  },[id])
    return(
      <div  style={{margin: '20px'}}>
        id = {id}
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


// ---------------- For auto render in Sec using settimeout ---------------
/*
useEffect(()=>{
  setTimeout(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=`+id)
   .then( res=> {
     setTodo(res.data.todo)
     console.log(data)
   })
  },5000)
})
*/


// ------------------------My Technique :) cheap but working ----------------------
/*

import axios  from 'axios'
import './App.css';
import { useEffect, useState } from "react";

function App() {
  let [id, setid] = useState(1)
 return <div>
  <button onClick={()=>{
    setid(id = 1);
  }} >{1}</button>

<button onClick={()=>{
    setid(id = 2);
  }} >{2}</button>

<button onClick={()=>{
    setid(id = 3);
  }} >{3}</button>

<button onClick={()=>{
    setid(id = 4);
  }} >{4}</button>

<button onClick={()=>{
    setid(id = 5);
  }} >{5}</button>
  
  <Todo id={id}/>
 </div>
}
function Todo({id}){
  const [todo, setTodo] = useState({})
  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=`+id)
    .then( function(res){
      setTodo(res.data.todo)
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
*/