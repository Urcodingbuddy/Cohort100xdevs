
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState, useRecoilValueLoadable } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  // const [networkCount, setNetworkCount] = useRecoilState(notifications)
  // const totalNotificationCount = useRecoilValue(totalNotificationSelector);


  const networkCountLoadable = useRecoilValueLoadable(notifications)
  const totalNotificationCountLoadable = useRecoilValueLoadable(totalNotificationSelector);

  if (networkCountLoadable.state === 'loading' || totalNotificationCountLoadable.state === 'loading') {
    return <div>Loading...</div>
  }

  if (networkCountLoadable.state === 'hasError' || totalNotificationCountLoadable.state === 'hasError') {
    return <div>Error loading data</div>
  }

  const networkCount = networkCountLoadable.contents
  const totalNotificationCount = totalNotificationCountLoadable.contents

  

  
  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App


// useEffect(() => {
//   const intervalId = setInterval(() => {
//     axios.get("https://sum-server.100xdevs.com/notifications")
//       .then(res => {
//         setNetworkCount(res.data)
//       })
//   }, 1000);
//   return () => clearInterval(intervalId);
// }, [])