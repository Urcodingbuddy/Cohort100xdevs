import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [exchange1Data, setExchange1data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(()=>{
      setExchange1data({
        return: 100
      });
  }, [])

  useEffect(()=>{
    setExchange2Data({
      return: 1000
    })
  })

  useEffect(()=>{
    setTimeout(()=>{
      setBankData({
        income:80 
      })
    },5000)
  },[])


const cryptoReturn = (()=>{
    return exchange1Data.return + exchange2Data.return;
},[exchange1Data, exchange2Data])
  const incomeTax = (cryptoReturn + bankData.income) *  0.3

  return (
    <>
      hi there, your income tax return are {incomeTax}
    </>
  )
}

export default App
