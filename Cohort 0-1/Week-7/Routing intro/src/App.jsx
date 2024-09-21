import React, { useState, Suspense } from 'react'
import {lazy} from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
const Dashboard = lazy(()=> import('./components/DashBoard'))
const Landing = lazy(()=> import('./components/Landing'))
function Navbar() {
  const navigate = useNavigate();
  return <nav className='navbar'>
    <button class="nav-link"
      onClick={()=>{
        navigate('/')
      }}
    >Home</button>
    <button class="nav-link"
      onClick={()=>{
        navigate('/dashboard')
      }}
    >Dashboard</button>
  </nav>

}
function App() {
  const router = [{
    route: "/",
    component: Dashboard
  }]

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>} >
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}



export default App
