import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});
  useEffect(()=>{
    setExchange1Data({
      return: 100
    })
  },[])
  useEffect(()=>{
    setExchange2Data({
      return: 200
    })
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      setBankData({
        income: 500
      })
    },5000)
  },[exchange1Data, exchange2Data])
  const calculateCryptoReturns = function(){
    return exchange1Data.return + exchange2Data.return;
  }
  const incomeTax = (calculateCryptoReturns() + bankData.income) * 0.8
  return (
    <>
      hi there, Your Income tax return are {incomeTax}
    </>
  )
}
export default App
