import { useContext, useEffect, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import {Dashboard} from "./components/Dashboard.jsx"
import {Landing} from "./components/Landing.jsx"



import './App.css'
function App() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
        <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Landing />} />
        </Routes>
        </BrowserRouter>
      </RecoilRoot>
      
    </div>
  )
  
}











 

export default App


