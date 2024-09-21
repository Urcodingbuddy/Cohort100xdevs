# Check the  ButtonUpdater()

import './App.css'
import { useRecoilValue,RecoilRoot, useRecoilState } from 'recoil'
import { jobsAtom, messageAtom, networkAtom, notifiAtom } from './atmos'

function App() {

  return (
      <RecoilRoot>
        <Navbarbtns/>
      </RecoilRoot>
  )
}


function Navbarbtns() {
  const networkNotiCount = useRecoilValue(networkAtom);
  const jobsNotiCount = useRecoilValue(jobsAtom);
  const messageNotiCount = useRecoilValue(messageAtom);
  const NotifiCount= useRecoilValue(notifiAtom);
  return <div>
      <button>Home</button>
      <button>My network {networkNotiCount >= 100 ? "99+" : networkNotiCount}</button>
      <button>Jobs {jobsNotiCount >= 100 ? "99+" : jobsNotiCount}</button>
      <button>Messaging {messageNotiCount >= 100 ? "99+" : messageNotiCount}</button>
      <button>Notifications {NotifiCount >= 100 ? "99+" : NotifiCount}</button>
      <ButtonUpdater/>
      
    </div>
}

function ButtonUpdater(){
  const setMessagingAtomCount = useRecoilState(messageAtom);
  return <>
      <button onClick={()=>{
        setMessagingAtomCount(c => c+1)
      }} >Me</button>
  </>
}

export default App