import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [latestMsg, setLatestMsg] = useState("")
  const [Sendtxt, setSendtxt] = useState("");

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      console.log('Connected')
      setSocket(socket)
    }
    socket.onmessage = (message) => {
      console.log('Recived message:', message.data)
      setLatestMsg(message.data)
    }
  }, [])

  if (!socket) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <>
      <h4>Message</h4>
      <div >
        <input type="text" onChange={(e) => {setSendtxt(e.target.value)}}/>
        <button onClick={()=>{socket.send(Sendtxt)}}>Send</button>
        <Sendbtn socket={socket} Sendtxt={Sendtxt}/>
      </div>
      <span>{latestMsg}</span>
    </>
  )
}

export default App

function Sendbtn({socket, Sendtxt}:any) {
  const handleClick = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(Sendtxt);
      console.log('Message sent:', Sendtxt);
    } else {
      console.log('WebSocket is not open.');
    }
  };
  return (
    <button className="p-2" onClick={handleClick}>
    <svg xmlns="http://www.w3.org/2000/svg" height={"20"} width={"20"} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
    </button>
  )
}