import { useEffect, useState } from "react";

function useInterval(func, timers) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(func, timers)
        return () => clearInterval(intervalId)
    }, [func, timers])
    return { count, setCount }
}
export default useInterval;