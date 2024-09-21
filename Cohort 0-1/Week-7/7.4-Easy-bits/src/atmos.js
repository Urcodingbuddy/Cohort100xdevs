import {atom, selector} from 'recoil';

export const networkAtom = atom({
    key: "networkAtom",
    default: 12
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 3
})

export const messageAtom = atom({
    key: "messageAtom",
    default: 11
})

export const notifiAtom = atom({
    key: "notiAtom",
    default: 12
})

export const totalnoticontSelector = selector({
    key: "totalnoticontSelector",
    get:({get})=>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const messageAtomCount = get(messageAtom);
        const notifiAtomCount = get(notifiAtom);
        return networkAtomCount + jobsAtomCount + messageAtomCount + notifiAtomCount;
    }
})

/*
    const [network, setNetWork] = useState(50)
    const [jobs, setJobs] = useState(12)
    const [Messaging, setMessaging] = useState(0)
    const [notiCount, setNotiCount ] = useState(0)
*/
